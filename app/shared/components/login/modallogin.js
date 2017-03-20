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
var ModalLoginComponent = (function () {
    function ModalLoginComponent(msnService, loginService, ngZone) {
        this.msnService = msnService;
        this.loginService = loginService;
        this.loginCallBack = new core_1.EventEmitter();
        this.myGoogleClientId = '765964134907-qgucoo8h671ili4clikg4io886sqgbm6.apps.googleusercontent.com';
        this.isLoggedIn = false;
        //	this.initialLoad();
    }
    ModalLoginComponent.prototype.initialLoad = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.isLoggedIn = false;
        if (currentUser)
            this.loginService.loginUserInfo(currentUser).subscribe(function (user) {
                if (user.HasRegistered) {
                    _this.isLoggedIn = true;
                    _this.user = user;
                    console.log(user);
                }
            });
    };
    //logOutClick(): void {
    //	// clear token remove user from local storage to log user out
    //	// this.token = null;
    //	localStorage.removeItem('currentUser');
    //	//this.initialLoad();
    //}
    //ngAfterViewInit() {
    //}
    ModalLoginComponent.prototype.googleInit = function () {
        var that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: '765964134907-qgucoo8h671ili4clikg4io886sqgbm6.apps.googleusercontent.com',
                // cookiepolicy: 'single_host_origin',
                scope: 'profile email openid'
            });
            that.attachSignin(document.getElementById('googleBtnmodal'));
        });
    };
    ModalLoginComponent.prototype.attachSignin = function (element) {
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
                that.myLoginModal.close();
            }, function (error) {
                alert(JSON.stringify(error, undefined, 2));
            });
    };
    //loginOrSignupclick() {
    //	this.myLoginModal.open();
    //	this.googleInit();
    //}
    ModalLoginComponent.prototype.open = function () {
        this.myLoginModal.open();
        this.googleInit();
    };
    ModalLoginComponent.prototype.onFacebookLoginClick = function () {
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
    ModalLoginComponent.prototype.fetchFacebookUserDetails = function () {
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
        }, function (error) {
            alert("facebook login failed");
        });
    };
    ModalLoginComponent.prototype.validateSocialLoginDetails = function (details) {
        var _this = this;
        this.loginService.validateSocialLoginDetails(details).subscribe(function (user) {
            console.log(user);
            //need to handle after login success in UI
            localStorage.setItem('currentUser', JSON.stringify({ username: user.userName, token: user.access_token }));
            //	this.initialLoad();
            _this.loginCallBack.emit(null);
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    __decorate([
        core_1.ViewChild('myLoginModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], ModalLoginComponent.prototype, "myLoginModal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ModalLoginComponent.prototype, "loginCallBack", void 0);
    ModalLoginComponent = __decorate([
        core_1.Component({
            selector: 'modallogin',
            templateUrl: 'app/shared/components/login/modallogin.html',
            styleUrls: ['app/shared/components/login/modallogin.css'],
            providers: [msn_service_1.MSNService, msn_login_1.LoginService, router_1.RouterLink, angular_google_signin_1.GoogleSignInComponent]
        }), 
        __metadata('design:paramtypes', [msn_service_1.MSNService, msn_login_1.LoginService, core_1.NgZone])
    ], ModalLoginComponent);
    return ModalLoginComponent;
}());
exports.ModalLoginComponent = ModalLoginComponent;
//# sourceMappingURL=modallogin.js.map