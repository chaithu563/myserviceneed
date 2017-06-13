"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var msn_service_1 = require('../../../services/msn.service');
var msn_login_1 = require('../../../services/msn.login');
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var angular_google_signin_1 = require('angular-google-signin');
var LoginComponent = (function () {
    function LoginComponent(msnService, loginService, ngZone) {
        this.msnService = msnService;
        this.loginService = loginService;
        this.myGoogleClientId = '765964134907-qgucoo8h671ili4clikg4io886sqgbm6.apps.googleusercontent.com';
        this.isLoggedIn = false;
        this.initialLoad();
    }
    LoginComponent.prototype.initialLoad = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.isLoggedIn = false;
        if (currentUser)
            this.loginService.loginUserInfo(currentUser).subscribe(function (user) {
                if (user.HasRegistered) {
                    _this.isLoggedIn = true;
                    _this.user = user;
                    localStorage.setItem('userDetails', JSON.stringify(user));
                    console.log(user);
                }
            });
    };
    LoginComponent.prototype.logOutClick = function () {
        // clear token remove user from local storage to log user out
        // this.token = null;
        localStorage.removeItem('currentUser');
        this.initialLoad();
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
    };
    LoginComponent.prototype.googleInit = function () {
        var that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: '765964134907-qgucoo8h671ili4clikg4io886sqgbm6.apps.googleusercontent.com',
                // cookiepolicy: 'single_host_origin',
                scope: 'profile email openid'
            });
            that.attachSignin(document.getElementById('googleBtn'));
        });
    };
    LoginComponent.prototype.attachSignin = function (element) {
        var that = this;
        if (element)
            this.auth2.attachClickHandler(element, {}, function (googleUser) {
                var profile = googleUser.getBasicProfile();
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
            }, function (error) {
                alert(JSON.stringify(error, undefined, 2));
            });
    };
    LoginComponent.prototype.loginOrSignupclick = function () {
        this.myLoginModal.open();
        this.googleInit();
    };
    LoginComponent.prototype.onFacebookLoginClick = function () {
        // FB.login();
        var _this = this;
        this.loginService.FBInit();
        this.loginService.getFacebookLoginStatus().then(function (response) {
            console.log(response);
            if (response.status === 'connected') {
                _this.facebooktoken = response.authResponse.accessToken;
                _this.fetchFacebookUserDetails();
            }
            else {
                _this.loginService.facebookLogin(null).then(function (response) {
                    console.log(response);
                    if (response.status === 'connected') {
                        _this.facebooktoken = response.authResponse.accessToken;
                        _this.fetchFacebookUserDetails();
                    }
                    else {
                        alert("facebook login failed");
                    }
                }, function (error) { return console.error(error); });
            }
        });
    };
    LoginComponent.prototype.fetchFacebookUserDetails = function () {
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
        }, function (error) {
            alert("facebook login failed");
        });
    };
    LoginComponent.prototype.validateSocialLoginDetails = function (details) {
        var _this = this;
        var _that = this;
        this.loginService.validateSocialLoginDetails(details).subscribe(function (user) {
            console.log(user);
            //need to handle after login success in UI
            localStorage.setItem('currentUser', JSON.stringify({ username: user.userName, token: user.access_token }));
            _that.myLoginModal.close();
            _this.initialLoad();
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    __decorate([
        core_1.ViewChild('myLoginModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], LoginComponent.prototype, "myLoginModal", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/core/header/login/login.html',
            styleUrls: ['app/core/header/login/login.css'],
            providers: [msn_service_1.MSNService, msn_login_1.LoginService, router_1.RouterLink, angular_google_signin_1.GoogleSignInComponent]
        }), 
        __metadata('design:paramtypes', [msn_service_1.MSNService, msn_login_1.LoginService, core_1.NgZone])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map