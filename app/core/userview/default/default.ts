import { Component, ModuleWithProviders } from '@angular/core';

import { Router,Route, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';
import {RegisterUserComponent} from  '../user/registeruser';

@Component({
	selector: 'userview',
	templateUrl: 'app/core/userview/default/default.html',
	styleUrls: ['app/core/userview/default/default.css'],
	providers: [],
	directives: []
})
export class DefaultViewComponent {

  //  geocoder: any;
  //  google: any;
  //lat: number = 17.440080;
  //lng: number = 78.348917;
  //  city: string;
  //  constructor( public _router: Router) {

  //  	this.findCurrentLocation();

  //  }


  //  	findCurrentLocation() {
  //  	var _this = this;
  //  	// Try HTML5 geolocation.
  //  	if (navigator.geolocation) {
  //  		navigator.geolocation.getCurrentPosition(function (position) {


  //  			_this.lat = position.coords.latitude;
  //  			_this.lng = position.coords.longitude;
  //  			//_this.lat = 16.306652;
  //  			//_this.lng = 80.436240;
					
  //  			_this.findCity();

  //  		}, function () {
  //  			alert('error');
  //  		});
  //  	} else {
  //  		// Browser doesn't support Geolocation
  //  		alert('error');
  //  	}

  //  	}


  //  	findCity() {

  //  	var geocoder;
  //  	geocoder = new google.maps.Geocoder();
  //  	var latlng = new google.maps.LatLng(this.lat, this.lng);
  //  	var _this = this;
  //  	geocoder.geocode(
  //  		{ 'latLng': latlng },
  //  		function (results, status) {
  //  			if (status == google.maps.GeocoderStatus.OK) {
  //  				if (results[0]) {
  //  					var value = results[0].address_components;
  //  					//	var value = add.split(",");

  //  					var count = value.length;
  //  					//country = value[count - 1];
  //  					//state = value[count - 2];
  //  					_this.city = value[count - 5].long_name;
  //  					alert("city name is: " + _this.city);
  //  					_this._router.navigateByUrl(':' + _this.city.trim());
  //  				//	_this._router.navigate(["/"], _this.city.trim());
  //  				}
  //  				else {
  //  					alert("address not found");
  //  				}
  //  			}
  //  			else {
  //  				alert("Geocoder failed due to: " + status);
  //  			}
  //  		}
  //  		);
  //  	}
}
