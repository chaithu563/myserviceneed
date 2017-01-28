System.register(["@angular/core", "../../../services/msn.service", "../../../services/msn.login", "@angular/router", "ng2-bootstrap", "angular-google-signin"], function (exports_1, context_1) {
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
    var core_1, msn_service_1, msn_login_1, router_1, ng2_bootstrap_1, angular_google_signin_1, LoginComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            },
            function (msn_login_1_1) {
                msn_login_1 = msn_login_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (angular_google_signin_1_1) {
                angular_google_signin_1 = angular_google_signin_1_1;
            }
        ],
        execute: function () {
            LoginComponent = (function () {
                function LoginComponent(msnService, loginService, ngZone) {
                    this.msnService = msnService;
                    this.loginService = loginService;
                    this.myGoogleClientId = '765964134907-qgucoo8h671ili4clikg4io886sqgbm6.apps.googleusercontent.com';
                }
                LoginComponent.prototype.ngAfterViewInit = function () {
                };
                LoginComponent.prototype.googleInit = function () {
                    var that = this;
                    gapi.load('auth2', function () {
                        that.auth2 = gapi.auth2.init({
                            client_id: '765964134907-qgucoo8h671ili4clikg4io886sqgbm6.apps.googleusercontent.com',
                            cookiepolicy: 'single_host_origin',
                            scope: 'profile email'
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
                            console.log('Token || ' + googleUser.getAuthResponse().id_token);
                            console.log('ID: ' + profile.getId());
                            console.log('Name: ' + profile.getName());
                            console.log('Image URL: ' + profile.getImageUrl());
                            console.log('Email: ' + profile.getEmail());
                            //YOUR CODE HERE
                            that.validateSocialLoginDetails({
                                name: profile.getName(),
                                email: profile.getEmail(),
                                logintype: 1,
                                phone: "",
                            });
                            that.myLoginModal.close();
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
                            _this.fetchFacebookUserDetails();
                        }
                        else {
                            _this.loginService.facebookLogin(null).then(function (response) {
                                console.log(response);
                                if (response.status === 'connected') {
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
                            name: response.name,
                            email: response.email,
                            gender: response.gender,
                            phone: "",
                            logintype: 2
                        });
                        _this.myLoginModal.close();
                    }, function (error) {
                        alert("facebook login failed");
                    });
                };
                LoginComponent.prototype.validateSocialLoginDetails = function (details) {
                    this.loginService.validateSocialLoginDetails(details).subscribe(function (user) {
                        console.log(user);
                        //need to handle after login success in UI
                    }, function (err) {
                        // Log errors if any
                        console.log(err);
                    });
                };
                return LoginComponent;
            }());
            __decorate([
                core_1.ViewChild('myLoginModal'),
                __metadata("design:type", ng2_bootstrap_1.ModalDirective)
            ], LoginComponent.prototype, "myLoginModal", void 0);
            LoginComponent = __decorate([
                core_1.Component({
                    selector: 'login',
                    templateUrl: 'app/core/header/login/login.html',
                    styleUrls: ['app/core/header/login/login.css'],
                    providers: [msn_service_1.MSNService, msn_login_1.LoginService, router_1.RouterLink, angular_google_signin_1.GoogleSignInComponent]
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, msn_login_1.LoginService, core_1.NgZone])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    };
});
//# sourceMappingURL=login.js.map