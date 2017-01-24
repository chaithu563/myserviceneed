import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MSNService } from '../../../services/msn.service';
import { LoginService } from '../../../services/msn.login';
import { Observable } from 'rxjs/Observable';
import {  RouterLink} from '@angular/router';

@Component({
	selector: 'login',
	templateUrl: 'app/core/header/login/login.html',
	styleUrls: ['app/core/header/login/login.css'],
	providers: [MSNService, LoginService,RouterLink]

})
export class LoginComponent implements AfterViewInit {

	categories: any;
	cities: any;
	UserCity: string;
	constructor(private msnService: MSNService, private loginService: LoginService) {

	
	}

	private actionOnOpen() {

		

	}

	private actionOnClose() {



	}
		
	private actionOnSubmit() {



	}
	


}
