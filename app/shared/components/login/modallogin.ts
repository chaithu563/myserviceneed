import { Component, ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter, NgZone  } from '@angular/core';
import { MSNService } from '../../../services/msn.service';
import { LoginService } from '../../../services/msn.login';
import { Observable } from 'rxjs/Observable';
import {  RouterLink} from '@angular/router';
import {ModalDirective} from 'ng2-bootstrap';
import {GoogleSignInSuccess} from 'angular-google-signin';
import {GoogleSignInComponent} from 'angular-google-signin';
@Component({
	selector: 'modallogin',
	templateUrl: 'app/shared/components/login/modallogin.html',
	styleUrls: ['app/shared/components/login/modallogin.css'],
	providers: [MSNService, LoginService, RouterLink, GoogleSignInComponent]

})
export class ModalLoginComponent implements AfterViewInit {
	@ViewChild('myLoginModal') public myLoginModal: ModalDirective;
	@Output() loginCallBack : EventEmitter = new EventEmitter<any>();
	isLoggedIn: boolean;
	categories: any;
	cities: any;
	user: any;
	UserCity: string;
		facebooktoken: string;
	declare const gapi: any;
	public auth2: any;
	myGoogleClientId: string = '765964134907-qgucoo8h671ili4clikg4io886sqgbm6.apps.googleusercontent.com';
	constructor(private msnService: MSNService, private loginService: LoginService, ngZone: NgZone) {
		this.isLoggedIn = false;
	//	this.initialLoad();
	
	}

	initialLoad() {

		var currentUser = JSON.parse(localStorage.getItem('currentUser'));
				this.isLoggedIn = false;
				if (currentUser)
			this.loginService.loginUserInfo(currentUser).subscribe(
				user=> {
					if (user.HasRegistered) {
						this.isLoggedIn = true;
						this.user = user;
						console.log(user);
					}
				}


        );

	}

	//logOutClick(): void {
	//	// clear token remove user from local storage to log user out
	//	// this.token = null;
	//	localStorage.removeItem('currentUser');
	//	//this.initialLoad();
	//}

	//ngAfterViewInit() {




	//}

	public googleInit() {
		let that = this;
		gapi.load('auth2', function () {
			that.auth2 = gapi.auth2.init({
				client_id: '765964134907-qgucoo8h671ili4clikg4io886sqgbm6.apps.googleusercontent.com',
				// cookiepolicy: 'single_host_origin',
				scope: 'profile email openid'
			});
			that.attachSignin(document.getElementById('googleBtnmodal'));
		});
	}
	public attachSignin(element) {
		let that = this;
		if (element)
			this.auth2.attachClickHandler(element, {},
				function (googleUser) {

					let profile = googleUser.getBasicProfile();
					console.log(profile);
					console.log('Token || ' + googleUser.getAuthResponse().access_token);
					console.log('ID: ' + profile.getId());
					console.log('Name: ' + profile.getName());
					console.log('Image URL: ' + profile.getImageUrl());
					console.log('Email: ' + profile.getEmail());
					//YOUR CODE HERE
					that.validateSocialLoginDetails({
						UserName: profile.getName(),
						ExternalAccessToken: googleUser.getAuthResponse().access_token,
						Email: profile.getEmail(),
						logintype: 1,
						phone: "",
												Provider: "Google"
					});
					that.myLoginModal.close();

				}, function (error) {
					alert(JSON.stringify(error, undefined, 2));
				});
	}

	//loginOrSignupclick() {

	//	this.myLoginModal.open();
	//	this.googleInit();


	//}

		open() {

		this.myLoginModal.open();
		this.googleInit();


	}

	onFacebookLoginClick() {
		// FB.login();
		var _this = this;
		this.loginService.FBInit();


		this.loginService.getFacebookLoginStatus().then(
			function (response) {

				console.log(response);
				if (response.status === 'connected') {

					_this.facebooktoken = response.authResponse.accessToken;
					_this.fetchFacebookUserDetails();

				}

				else {

					_this.loginService.facebookLogin(null).then(
						function (response) {
							console.log(response);
							if (response.status === 'connected') {

								_this.facebooktoken = response.authResponse.accessToken;
								_this.fetchFacebookUserDetails();
							}

							else {

								alert("facebook login failed");
							}

						},
						(error: any) => console.error(error)
						);


				}
			}
			);




	}


	fetchFacebookUserDetails() {
		var _this = this;
		this.loginService.fetchFacebookUserDetails().then(function (response) {

			console.log(response);
			_this.validateSocialLoginDetails({
				UserName: response.name,
				ExternalAccessToken: _this.facebooktoken,
				Email: response.email,
				gender: response.gender,
				phone: "",
				logintype: 2,
								Provider: "Facebook"
			});
			_this.myLoginModal.close();
		},
			function (error) {
				alert("facebook login failed");
			}
			);
	}


	validateSocialLoginDetails(details) {

		this.loginService.validateSocialLoginDetails(details).subscribe(
			user => {
				console.log(user);
				//need to handle after login success in UI

				localStorage.setItem('currentUser', JSON.stringify({ username: user.userName, token: user.access_token }));
							//	this.initialLoad();
								this.loginCallBack.emit(null);
			},
			err => {
				// Log errors if any
				console.log(err);
			});

	}
}



