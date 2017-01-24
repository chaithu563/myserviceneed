import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MSNService } from '../../../services/msn.service';
import { LoginService } from '../../../services/msn.login';
import { Observable } from 'rxjs/Observable';
import {  RouterLink} from '@angular/router';
import {ModalDirective} from 'ng2-bootstrap';
@Component({
	selector: 'login',
	templateUrl: 'app/core/header/login/login.html',
	styleUrls: ['app/core/header/login/login.css'],
	providers: [MSNService, LoginService,RouterLink]

})
export class LoginComponent implements AfterViewInit {
	@ViewChild('myLoginModal') public myLoginModal: ModalDirective;
	categories: any;
	cities: any;
	UserCity: string;
	constructor(private msnService: MSNService, private loginService: LoginService) {

	
	}

	ngAfterViewInit() {
    gapi.signin2.render('my-signin2', {
			'scope': 'profile email',
			'width': 240,
			'height': 50,
			'longtitle': true,
			'theme': 'light',
			'onsuccess': param => this.onSignIn(param)
    });
	}


	onFacebookLoginClick() {
		// FB.login();
		var _this = this;
		this.loginService.FBInit();


		this.loginService.facebookLogin(null).then(
			function (response) {
				console.log(response);
				if (response.status === 'connected') {


					_this.loginService.fetchFacebookUserDetails().then(function (response) {

						console.log(response);
						_this.myLoginModal.close();
					},
						function (error) {
							alert("facebook login failed");
						}
						);
				}

				else {

					alert("facebook login failed");
				}
        
			},
      (error: any) => console.error(error)
			);


	}

	public  onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}



}
