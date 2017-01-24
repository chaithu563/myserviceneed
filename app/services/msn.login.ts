import {Component, OnInit} from '@angular/core';
//import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Injectable} from '@angular/core';

declare const FB: any;



export class LoginService  {
    isUserLogin: boolean = false;
    userDetails: any = {};
    
    FBInit() {

        FB.init({
            appId: '1520026344681982',
            cookie: false,  // enable cookies to allow the server to access
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.5' // use graph api version 2.5
        });

    }



    getFacebookLoginStatus(): Promise<any> {
        return new Promise<any>(
            (resolve, reject) => {
                FB.getLoginStatus((response: any) => {
                    if (!response) reject();
                    else resolve(response);
                });
            }
        );
    }

    facebookLogout(): Promise<any> {
        return new Promise<any>(
            (resolve) => {
                FB.logout((response: any) => {
                    resolve(response);
                });
            }
        );
    }
    facebookLogin(options): Promise<any> {
        return new Promise<FacebookLoginResponse>(
            (resolve, reject) => {
                FB.login((response: any) => {
                    if (response.authResponse) {
                        resolve(response);
                    } else {
                        reject();
                    }
                }, options);
            }
        );
    }

    fetchFacebookUserDetails(): Promise<any> {
        return new Promise<any>(
            (resolve) => {
            //access_token: response.accessToken,
        FB.api('/me', {  fields: 'id,name,email,gender,address,permissions' }, function (response) {
            // alert('Your name is ' + response.name);
            resolve(response);
                });
            }
        );
    }
   
}