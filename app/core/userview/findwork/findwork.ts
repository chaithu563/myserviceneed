import { Component, ModuleWithProviders, ChangeDetectorRef, NgZone, Input, Output, EventEmitter } from '@angular/core';

import { MSNService } from '../../../services/msn.service';
import { PagerService } from '../../../services/msn.pager';
import { Router, Route, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
import {ListViewWorkComponent} from './listviewwork/listviewwork';
import {MapViewWorkComponent} from './mapviewwork/mapviewwork';
//import {RegisterUserComponent} from  '../user/registeruser';
import { Observable } from 'rxjs/Observable';
import { AgmCoreModule, MapsAPILoader, NoOpMapsAPILoader, MouseEvent } from 'angular2-google-maps/core';
@Component({
	selector: 'userview',
	templateUrl: 'app/core/userview/findwork/findwork.html',
	styleUrls: ['app/core/userview/findwork/findwork.css'],
	providers: [MSNService, PagerService],
	directives: []
})
export class FindWorkComponent {
	avilableServices: any;
	searchString: string;
	listview: boolean = false;
	servicessearch: Observable<any>;
  //  searchUrl: string = "http://localhost/MSNServiceApi/api/FetchServices?search=:keyword";
	constructor(private msnService: MSNService, private pagerService: PagerService, private router: Router, private zone: NgZone, private _loader: MapsAPILoader) {

		this.servicessearch = {};
		//this.servicessearch.latitude = 16.3066;
		//this.servicessearch.longitude = 80.43654;

				this.avilableServices = this.msnService.getAvailableServicesURL();
				this.findCurrentLocation();
		this.loadAutocomplete();


	}



	loadAutocomplete() {



		this._loader.load().then(() => {
			let autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"), {});
			google.maps.event.addListener(autocomplete, 'place_changed', () => {
				let place = autocomplete.getPlace();
				this.servicessearch.latitude = place.geometry.location.lat();
        this.servicessearch.longitude = place.geometry.location.lng();
				//	this.findCity();
								//this.userAddress = "";
				console.log(place);
			});
		});

	}

	findCurrentLocation() {
		var _this = this;
		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				_this.servicessearch.latitude = position.coords.latitude;
				_this.servicessearch.longitude = position.coords.longitude;

				//_this.findCity();

			}, function () {
				alert('error');
			});
		} else {
			// Browser doesn't support Geolocation
			alert('error');
		}

	}

	serviceSelected(object) {
		if (object && object.NAME)
			//	this.router.navigate(['postservice', object.ID]);
			// this.router.navigateByUrl('postservice/' + object.ID);
			console.log(object);
	}


}
