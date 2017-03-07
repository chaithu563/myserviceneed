import { Component, ModuleWithProviders, NgZone, Input, Output, EventEmitter} from '@angular/core';
import { Routes, Router, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
import { Injectable } from '@angular/core';
import {GoogleplaceDirective} from '../../../../shared/directives/googleplace.directive';
import { AgmCoreModule, MapsAPILoader, NoOpMapsAPILoader, MouseEvent } from 'angular2-google-maps/core';

@Component({
	selector: 'address',
	templateUrl: 'app/core/userview/postservice/address/address.html',
	styleUrls: ['app/core/userview/postservice/address/address.css'],
	providers: []

})



//@Injectable()
export class AddressComponent {

	@Input() serviceinfo: any;
	@Output() serviceinfoChange : EventEmitter =new EventEmitter<any>();
	userAddress: Object;
	public address: Object;
	geocoder: any;
	google: any;
	//lat: number;
	//lng: number;
	city: string;
	constructor(public _router: Router, private zone: NgZone, private _loader: MapsAPILoader) {
	//	this.serviceinfo.zoom = 15;
		this.findCurrentLocation();
		this.loadAutocomplete()
		
	}

	loadAutocomplete() {



		this._loader.load().then(() => {
			let autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"), {});
			google.maps.event.addListener(autocomplete, 'place_changed', () => {
				let place = autocomplete.getPlace();
				this.serviceinfo.latitude = place.geometry.location.lat();
				this.serviceinfo.longitude = place.geometry.location.lng();
				this.serviceinfo.zoom = 15;
                this.findCity();
								this.userAddress = ""; 
			});
		});

	}




	findCurrentLocation() {
		var _this = this;
		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				_this.serviceinfo.latitude = position.coords.latitude;
				_this.serviceinfo.longitude = position.coords.longitude;

				_this.findCity();

			}, function () {
			//	alert('error');
				_this.serviceinfo.latitude = 20.5937;
				_this.serviceinfo.longitude = 78.9629;
				_this.serviceinfo.zoom = 5;
			});
		} else {
			// Browser doesn't support Geolocation
			alert('error');
		}

	}


	findCity() {

		var geocoder;
		geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(this.serviceinfo.latitude, this.serviceinfo.longitude);
		var _this = this;
		geocoder.geocode(
			{ 'latLng': latlng },
			function (results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					if (results[0]) {
						var value = results[0].address_components;
						console.log(value);
						//	var value = add.split(",");
						var count = value.length;
						//country = value[count - 1];
						//state = value[count - 2];
						_this.city = value[count - 5].long_name;

                        var finaAddress;
                        value.forEach(function (addr) {
                            if (finaAddress)
                                finaAddress = finaAddress + '\n' + ',' + addr.long_name;
                            else
                                finaAddress =  addr.long_name;
                        });


					//	_this.userAddress = results[0].formatted_address;

                        _this.serviceinfo.address = "\n" + finaAddress;
					}
					else {
						alert("address not found");
					}
				}
				else {
					alert("Geocoder failed due to: " + status);
				}
			}
			);
	}

		markerPostionChanged(object) {

			this.serviceinfo.latitude = object.coords.lat;
			this.serviceinfo.longitude = object.coords.lng;
		this.findCity();
    }

        isEmpty(obj) {
            return Object.keys(obj).length === 0;
        }


				addressChange(value) {
				
			this.serviceinfoChange.emit(this.serviceinfo);

		}

}
