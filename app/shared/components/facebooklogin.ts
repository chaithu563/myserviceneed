import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';


declare const FB: any;

@Component({
    selector: 'facebook-login',
    templateUrl: 'app/shared/components/facebooklogin.html',
    //styleUrls: ['app/shared/components/facebooklogin.css'],
  //  templateUrl: 'facebooklogin.html',
    directives: [ROUTER_DIRECTIVES]
})

export class FacebookLoginComponent implements OnInit {
    isUserLogin: boolean = true;
    constructor() {
        FB.init({
            appId: '1520026344681982',
            cookie: false,  // enable cookies to allow the server to access
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.5' // use graph api version 2.5
        });
    }

    onFacebookLoginClick() {
       // FB.login();
        var _this = this;
        FB.login(function (response) {
           
            _this.statusChangeCallback(response);
        },  { perms: 'user_address, user_mobile_phone' });
    }

    statusChangeCallback(resp) {
        if (resp.status === 'connected') {
            // connect here with your server for facebook login by passing access token given by facebook
            console.log(resp);
            this.fetchUserDetails(resp.authResponse);

        } else if (resp.status === 'not_authorized') {
            this.isUserLogin = false;
        } else {
            this.isUserLogin = false;
        }
    };

    fetchUserDetails(response) {
        this.isUserLogin = true;
        FB.api('/me', { access_token: response.accessToken, fields: 'id,name,email,gender,address,permissions' }, function (response) {
           // alert('Your name is ' + response.name);
            console.log(response);
        });


    }
    ngOnInit() {
        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
    }
}