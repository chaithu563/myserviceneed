import { Component, ViewChild, OnInit, ModuleWithProviders, ChangeDetectorRef, NgZone, Input, Output, EventEmitter } from '@angular/core';
import {LoginService } from '../../../services/msn.login';
import { MSNService } from '../../../services/msn.service';
import { PagerService } from '../../../services/msn.pager';
import { Router, Route, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
import {ModalDirective} from 'ng2-bootstrap';
//import {AdminUserComponent} from './user/adminuser';
//import {RegisterUserComponent} from  '../user/registeruser';
import { Observable } from 'rxjs/Observable';
import { AgmCoreModule, MapsAPILoader, NoOpMapsAPILoader, MouseEvent } from 'angular2-google-maps/core';
@Component({
	selector: 'userneeds',
	templateUrl: 'app/core/userview/registerwork/registerwork.html',
	styleUrls: ['app/core/userview/registerwork/registerwork.css'],
	providers: [MSNService, PagerService, LoginService],
	directives: []

})
export class RegisterWorkComponent implements OnInit {
	
	avilableServices: any;
	searchString: string;
	userName: string;
	constructor(private msnService: MSNService, private router: Router, private zone: NgZone, private _loader: MapsAPILoader)
	{
		this.searchString = "";
		this.avilableServices = this.msnService.getAvailableServicesURL();
		var currentUser = JSON.parse(localStorage.getItem('userDetails'));
		this.userName = currentUser.Name;
	}

	

	serviceSelected(object) {
		if (object && object.NAME)
		//	this.router.navigate(['postservice', object.ID]);
		// this.router.navigateByUrl('postservice/' + object.ID);
		console.log(object);
	}

	

}
