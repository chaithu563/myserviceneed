System.register(["@angular/core", "rxjs/Observable", "../app.config", "@angular/http"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, Observable_1, app_config_1, http_1, LoginService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            LoginService = (function () {
                function LoginService(http) {
                    this.http = http;
                    this.isUserLogin = false;
                    this.userDetails = {};
                    this.config = {
                        ServiceApi: app_config_1.MSN_DI_CONFIG.MSNServiceApi,
                        HostApi: app_config_1.MSN_DI_CONFIG.MSNHost
                    };
                }
                LoginService.prototype.FBInit = function () {
                    FB.init({
                        appId: '1520026344681982',
                        cookie: false,
                        // the session
                        xfbml: true,
                        version: 'v2.5' // use graph api version 2.5
                    });
                };
                LoginService.prototype.getFacebookLoginStatus = function () {
                    return new Promise(function (resolve, reject) {
                        FB.getLoginStatus(function (response) {
                            if (!response)
                                reject();
                            else
                                resolve(response);
                        });
                    });
                };
                LoginService.prototype.facebookLogout = function () {
                    return new Promise(function (resolve) {
                        FB.logout(function (response) {
                            resolve(response);
                        });
                    });
                };
                LoginService.prototype.facebookLogin = function (options) {
                    return new Promise(function (resolve, reject) {
                        FB.login(function (response) {
                            if (response.authResponse) {
                                resolve(response);
                            }
                            else {
                                reject();
                            }
                        });
                    });
                };
                LoginService.prototype.fetchFacebookUserDetails = function () {
                    return new Promise(function (resolve) {
                        //access_token: response.accessToken,
                        FB.api('/me', { fields: 'id,name,email,gender,permissions' }, function (response) {
                            // alert('Your name is ' + response.name);
                            resolve(response);
                        });
                    });
                };
                LoginService.prototype.validateSocialLoginDetails = function (user) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
                    headers.append('Authorization', "Bearer " + user.externalAccessToken);
                    //	headers.append('Access-Control-Allow-Origin', '*');
                    var options = new http_1.RequestOptions({ headers: headers });
                    var json = JSON.stringify(user);
                    return this.http.post(this.config.HostApi + 'api/Account/RegisterExternalToken', user, options)
                        .map(function (res) {
                        return res.json();
                    })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
                };
                LoginService.prototype.loginUserInfo = function (user) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
                    headers.append('Authorization', "Bearer " + user.token);
                    //	headers.append('Access-Control-Allow-Origin', '*');
                    var options = new http_1.RequestOptions({ headers: headers });
                    var json = JSON.stringify(user);
                    return this.http.get(this.config.HostApi + 'api/Account/UserInfo', options)
                        .map(function (res) {
                        return res.json();
                    })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
                };
                return LoginService;
            }());
            LoginService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], LoginService);
            exports_1("LoginService", LoginService);
        }
    };
});
//# sourceMappingURL=msn.login.js.map