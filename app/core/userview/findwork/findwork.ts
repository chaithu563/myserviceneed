import { Component, ModuleWithProviders, ChangeDetectorRef, NgZone, Input, Output, EventEmitter } from '@angular/core';

import { MSNService } from '../../../services/msn.service';
import { Router, Route, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';
import {RegisterUserComponent} from  '../user/registeruser';
import { Observable } from 'rxjs/Observable';
import { AgmCoreModule, MapsAPILoader, NoOpMapsAPILoader, MouseEvent } from 'angular2-google-maps/core';
@Component({
	selector: 'userview',
	templateUrl: 'app/core/userview/findwork/findwork.html',
	styleUrls: ['app/core/userview/findwork/findwork.css'],
	providers: [MSNService],
	directives: []
})
export class FindWorkComponent {
	avilableServices: any;
    searchString: string;
    servicessearch: any;
  //  searchUrl: string = "http://localhost/MSNServiceApi/api/FetchServices?search=:keyword";
	constructor(private msnService: MSNService, private router: Router, private zone: NgZone, private _loader: MapsAPILoader) {

        this.servicessearch = [];
		this.avilableServices = this.msnService.getAvailableServicesURL();
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



	serviceSelected(object) {
		if (object && object.NAME)
		//	this.router.navigate(['postservice', object.ID]);
		// this.router.navigateByUrl('postservice/' + object.ID);
		console.log(object);
	}


}
