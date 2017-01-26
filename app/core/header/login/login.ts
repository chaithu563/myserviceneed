import { Component, ViewChild, ElementRef, AfterViewInit, NgZone  } from '@angular/core';
import { MSNService } from '../../../services/msn.service';
import { LoginService } from '../../../services/msn.login';
import { Observable } from 'rxjs/Observable';
import {  RouterLink} from '@angular/router';
import {ModalDirective} from 'ng2-bootstrap';
import {GoogleSignInSuccess} from 'angular-google-signin';
import {GoogleSignInComponent} from 'angular-google-signin';
@Component({
	selector: 'login',
	templateUrl: 'app/core/header/login/login.html',
	styleUrls: ['app/core/header/login/login.css'],
    providers: [MSNService, LoginService, RouterLink, GoogleSignInComponent]

})
export class LoginComponent implements AfterViewInit {
    @ViewChild('myLoginModal') public myLoginModal: ModalDirective;
    @ViewChild('googlesignin') public googlesignin: ElementRef;
    @ViewChild('googlesignin2') public googlesignin2: ElementRef;
    @ViewChild('googlesignindiv') public googlesignindiv: ElementRef;
    @ViewChild('googlesignindiv2') public googlesignindiv2: ElementRef;
	categories: any;
	cities: any;
	UserCity: string;
    constructor(private msnService: MSNService, private loginService: LoginService, ngZone: NgZone) {

      //  window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
	}
     myGoogleClientId: string = '765964134907-qgucoo8h671ili4clikg4io886sqgbm6.apps.googleusercontent.com'

	ngAfterViewInit() {
   // gapi.signin2.render('goolge-signin2', {
			//'scope': 'profile email',
			//'width': 240,
			//'height': 50,
			//'longtitle': true,
			//'theme': 'light',
			//'onsuccess': param => this.onSignIn(param)
   // });
        //gapi.load('auth2', function () {
        //    gapi.auth2.init();
        //});


       
     }

    declare const gapi: any;
    public auth2: any;
    public googleInit() {
        let that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: '765964134907-qgucoo8h671ili4clikg4io886sqgbm6.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            that.attachSignin(document.getElementById('googleBtn'));
        });
    }
    public attachSignin(element) {
        let that = this;
        this.auth2.attachClickHandler(element, {},
            function (googleUser) {

                let profile = googleUser.getBasicProfile();
                console.log('Token || ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
                //YOUR CODE HERE


            }, function (error) {
                alert(JSON.stringify(error, undefined, 2));
            });
    }
    loginOrSignupclick() {
       // this.googlesignindiv2.nativeElement.innerHTML = this.googlesignindiv.nativeElement.innerHTML;
        //this.googlesignindiv.nativeElement.innerHTML = "";
        //this.googlesignin2 = this.googlesignin;
        this.myLoginModal.open();
        this.googleInit();
  
      
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

//	  onSignIn(googleUser) {
//  var profile = googleUser.getBasicProfile();
//  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//  console.log('Name: ' + profile.getName());
//  console.log('Image URL: ' + profile.getImageUrl());
//  console.log('Email: ' + profile.getEmail());
//}
    onGoogleSignInSuccess(event: GoogleSignInSuccess) {
        let googleUser: gapi.auth2.GoogleUser = event.googleUser;
        let id: string = googleUser.getId();
        let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
        console.log('ID: ' +
            profile
                .getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
    }


}
