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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var FacebookLoginComponent = (function () {
    function FacebookLoginComponent() {
        this.isUserLogin = true;
        FB.init({
            appId: '1520026344681982',
            cookie: false,
            // the session
            xfbml: true,
            version: 'v2.5' // use graph api version 2.5
        });
    }
    FacebookLoginComponent.prototype.onFacebookLoginClick = function () {
        // FB.login();
        var _this = this;
        FB.login(function (response) {
            _this.statusChangeCallback(response);
        }, { perms: 'user_address, user_mobile_phone' });
    };
    FacebookLoginComponent.prototype.statusChangeCallback = function (resp) {
        if (resp.status === 'connected') {
            // connect here with your server for facebook login by passing access token given by facebook
            console.log(resp);
            this.fetchUserDetails(resp.authResponse);
        }
        else if (resp.status === 'not_authorized') {
            this.isUserLogin = false;
        }
        else {
            this.isUserLogin = false;
        }
    };
    ;
    FacebookLoginComponent.prototype.fetchUserDetails = function (response) {
        this.isUserLogin = true;
        FB.api('/me', { access_token: response.accessToken, fields: 'id,name,email,gender,address,permissions' }, function (response) {
            // alert('Your name is ' + response.name);
            console.log(response);
        });
    };
    FacebookLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        FB.getLoginStatus(function (response) {
            _this.statusChangeCallback(response);
        });
    };
    return FacebookLoginComponent;
}());
FacebookLoginComponent = __decorate([
    core_1.Component({
        selector: 'facebook-login',
        templateUrl: 'app/shared/components/facebooklogin.html',
        //styleUrls: ['app/shared/components/facebooklogin.css'],
        //  templateUrl: 'facebooklogin.html',
        directives: [router_1.ROUTER_DIRECTIVES]
    }),
    __metadata("design:paramtypes", [])
], FacebookLoginComponent);
exports.FacebookLoginComponent = FacebookLoginComponent;
//# sourceMappingURL=facebooklogin.js.map