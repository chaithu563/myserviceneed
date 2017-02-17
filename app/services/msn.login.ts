import {Component, OnInit} from '@angular/core';
//import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {MSN_DI_CONFIG } from '../app.config';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
declare const FB: any;


@Injectable()
export class LoginService  {
    isUserLogin: boolean = false;
    userDetails: any = {};
    private config = {

			ServiceApi: MSN_DI_CONFIG.MSNServiceApi,
			HostApi: MSN_DI_CONFIG.MSNHost
    };
    constructor(private http: Http) {

    }

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
                });
            }
        );
    }

    fetchFacebookUserDetails(): Promise<any> {
        return new Promise<any>(
            (resolve) => {
            //access_token: response.accessToken,
        FB.api('/me', {  fields: 'id,name,email,gender,permissions' }, function (response) {
            // alert('Your name is ' + response.name);
            resolve(response);
                });
            }
        );
    }


    validateSocialLoginDetails(user): Observable<any[]> {

  
			let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
			headers.append('Authorization', `Bearer ${user.externalAccessToken}` );
		//	headers.append('Access-Control-Allow-Origin', '*');
			let options = new RequestOptions({ headers: headers });
			var json = JSON.stringify(user);
			return this.http.post(this.config.HostApi + 'api/Account/RegisterExternalToken' ,user,options)
           
            .map((res) =>
               
                res.json()

            )
           
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    

    }

    loginUserInfo(user): Promise<any> {


        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        headers.append('Authorization', `Bearer ${user.token}`);
        //	headers.append('Access-Control-Allow-Origin', '*');
        let options = new RequestOptions({ headers: headers });
        var json = JSON.stringify(user);
        return this.http.get(this.config.HostApi + 'api/Account/UserInfo',options)

            .map((res) =>

                res.json()

            )

            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));



    }
   
}