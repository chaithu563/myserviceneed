System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LoginService;
    return {
        setters: [],
        execute: function () {
            LoginService = (function () {
                function LoginService() {
                    this.isUserLogin = false;
                    this.userDetails = {};
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
                        }, options);
                    });
                };
                LoginService.prototype.fetchFacebookUserDetails = function () {
                    return new Promise(function (resolve) {
                        //access_token: response.accessToken,
                        FB.api('/me', { fields: 'id,name,email,gender,address,permissions' }, function (response) {
                            // alert('Your name is ' + response.name);
                            resolve(response);
                        });
                    });
                };
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    };
});
//# sourceMappingURL=msn.login.js.map