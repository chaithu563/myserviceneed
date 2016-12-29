import { Component, ModuleWithProviders, NgZone} from '@angular/core';
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
	userAddress: object;
	public address: Object;
	geocoder: any;
	google: any;
	lat: number = 17.440080;
	lng: number = 78.348917;
	city: string;
	constructor(public _router: Router, private zone: NgZone, private _loader: MapsAPILoader) {

		this.findCurrentLocation();
		this.loadAutocomplete()

	}

	loadAutocomplete() {



		this._loader.load().then(() => {
			let autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"), {});
			google.maps.event.addListener(autocomplete, 'place_changed', () => {
				let place = autocomplete.getPlace();
				this.lat = place.geometry.location.lat();
				this.lng = place.geometry.location.lng();
			});
		});

	}

	getAddress(place: Object) {
		this.address = place['formatted_address'];
		var location = place['geometry']['location'];
		var lat = location.lat();
		var lng = location.lng();
		console.log("Address Object", place);
		this.lat = lat;
		this.lng = lng;
	}


	findCurrentLocation() {
		var _this = this;
		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				_this.lat = position.coords.latitude;
				_this.lng = position.coords.longitude;

				_this.findCity();

			}, function () {
				alert('error');
			});
		} else {
			// Browser doesn't support Geolocation
			alert('error');
		}

	}


	findCity() {

		var geocoder;
		geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(this.lat, this.lng);
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

				 	_this.userAddress = results[0].formatted_address;
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

		this.lat = object.coords.lat;
		this.lng = object.coords.lng;
		this.findCity();
		}

}
