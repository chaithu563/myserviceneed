import { Component, OnInit, ModuleWithProviders, ChangeDetectorRef, NgZone, Input, Output, EventEmitter } from '@angular/core';
import {LoginService } from '../../../services/msn.login';
import { MSNService } from '../../../services/msn.service';
import { PagerService } from '../../../services/msn.pager';
import { Router, Route, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';
//import {RegisterUserComponent} from  '../user/registeruser';
import { Observable } from 'rxjs/Observable';
import { AgmCoreModule, MapsAPILoader, NoOpMapsAPILoader, MouseEvent } from 'angular2-google-maps/core';
@Component({
	selector: 'userneeds',
	templateUrl: 'app/core/userview/userneeds/userneeds.html',
	styleUrls: ['app/core/userview/userneeds/userneeds.css'],
	providers: [MSNService, PagerService, LoginService],
	directives: []

})
export class UserNeedsComponent implements OnInit {
	avilableServices: any;
	searchString: string;
	servicessearch: any;
	constructor(private msnService: MSNService, private loginService: LoginService, private pagerService: PagerService, private router: Router, private zone: NgZone, private _loader: MapsAPILoader) {

		 // this.servicessearch = [];
		//  this.avilableServices = this.msnService.getAvailableServicesURL();
		this.servicessearch = {};
		this.initialLoad();
	}

	// array of all items to be paged
	private allItems: any[];

	// pager object
	pager: any = {};

	// paged items
	pagedItems: any[];

	loadUserServices() {
		// get dummy data
		this.msnService.getServiceWorks(this.servicessearch)
		// .map((response) => response)
			.subscribe(data => {
				// set items to json response
				this.allItems = data;

				// initialize to page 1
				this.setPage(1);
			});
	}

	setPage(page: number) {
		if (page < 1 || page > this.pager.totalPages) {
			return;
		}

		// get pager object from service
		this.pager = this.pagerService.getPager(this.allItems.length, page);

		// get current page of items
		this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
	}




	initialLoad() {

		var currentUser = JSON.parse(localStorage.getItem('currentUser'));
			
				if (currentUser)
			this.loginService.loginUserInfo(currentUser).subscribe(
				user=> {
					if (user.HasRegistered) {
					
						this.servicessearch.userid = user.ID;
						this.loadUserServices();
					}
				}


        );

	}

	
    onActionChange(value) {
        alert(value);

    }
}
