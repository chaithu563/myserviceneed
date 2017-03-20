var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
System.register("app/app.component", ["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    // 	template: '<header> </header> <div class="row" >  <div class="col-md-2" style="height: 100%;"> <leftmenu> </leftmenu> </div> <div class="col-md-10" style="height: 100%;"> <adminview></adminview>  </div> </div>',
                    template: '<header> </header>  <router-outlet></router-outlet> ',
                    // providers: [MSNOdataService],
                    // directives: [HeaderComponent]
                    styles: ["\n    ng2-auto-complete, input {\n      display: block;  width: 80%;\n    }\n  "]
                }),
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
System.register("app/app.config", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var MSN_DI_CONFIG;
    return {
        setters: [],
        execute: function () {
            exports_2("MSN_DI_CONFIG", MSN_DI_CONFIG = {
                oDataEndPoint: 'http://localhost/MSNAdmin/odata',
                oDataProvider: 'oData',
                MSNServiceApi: 'http://localhost/MSNServiceApi/api/',
                MSNHost: 'http://localhost/MSNServiceApi/'
            });
        }
    };
});
System.register("app/services/msn.service", ["@angular/core", "rxjs/Observable", "app/app.config", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/catch"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, Observable_1, app_config_1, http_1, MSNService;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
            MSNService = (function () {
                function MSNService(http) {
                    this.http = http;
                    this.config = {
                        ServiceApi: app_config_1.MSN_DI_CONFIG.MSNServiceApi
                    };
                }
                MSNService.prototype.getLocation = function () {
                    return this.http.get('https://ipinfo.io/geo')
                        .map(function (res) { return res.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
                };
                // Fetch all existing comments
                MSNService.prototype.getCategories = function () {
                    // ...using get request
                    return this.http.get(this.config.ServiceApi + 'SERVICECATEGORies')
                        .map(function (res) { return res.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
                };
                // Fetch all existing comments
                MSNService.prototype.getAvailableServicesURL = function () {
                    return this.config.ServiceApi + 'FetchServices?search=:keyword';
                };
                // Fetch all existing comments
                MSNService.prototype.getCities = function () {
                    // ...using get request
                    return this.http.get(this.config.ServiceApi + 'CITies')
                        .map(function (res) { return res.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
                };
                MSNService.prototype.deleteUserServiceNeed = function (data) {
                    //application/x-www-form-urlencoded
                    //application/json; charset=utf-8
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
                    headers.append('Authorization', 'Bearer ');
                    var options = new http_1.RequestOptions({ headers: headers });
                    // var json = JSON.stringify(data);
                    //	 var params = 'json=' + json;
                    // ...using get request
                    return this.http.delete(this.config.ServiceApi + 'USERSERVICENEEDs/' + data)
                        .map(function (res) { return res.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
                };
                MSNService.prototype.postUserServiceNeed = function (data) {
                    //application/x-www-form-urlencoded
                    //application/json; charset=utf-8
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
                    headers.append('Authorization', 'Bearer ');
                    var options = new http_1.RequestOptions({ headers: headers });
                    var json = JSON.stringify(data);
                    var params = 'json=' + json;
                    // ...using get request
                    return this.http.post(this.config.ServiceApi + 'USERSERVICENEEDs', json, options)
                        .map(function (res) { return res.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
                };
                MSNService.prototype.putUserServiceNeed = function (data) {
                    //application/x-www-form-urlencoded
                    //application/json; charset=utf-8
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
                    headers.append('Authorization', 'Bearer ');
                    var options = new http_1.RequestOptions({ headers: headers });
                    var json = JSON.stringify(data);
                    var params = 'json=' + json;
                    // ...using get request
                    return this.http.put(this.config.ServiceApi + 'USERSERVICENEEDs/' + data.ID, json, options)
                        .map(function (res) { return res.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
                };
                // Fetch all available servicess by user filter
                MSNService.prototype.getServiceWorks = function (data) {
                    // ...using get request
                    var query = JSON.stringify(data);
                    return this.http.get(this.config.ServiceApi + 'USERSERVICENEEDs' + '?query=' + encodeURIComponent(query))
                        .map(function (res) {
                        //JSON.parse(JSON.stringify(res._body))
                        return res.json();
                    })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
                };
                MSNService.prototype.getServiceById = function (id) {
                    // ...using get request
                    return this.http.get(this.config.ServiceApi + 'SERVICESUBCATEGORies' + '?id=' + id)
                        .map(function (res) {
                        //JSON.parse(JSON.stringify(res._body))
                        return res.json();
                    })
                        .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
                };
                return MSNService;
            }());
            MSNService = __decorate([
                core_2.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], MSNService);
            exports_3("MSNService", MSNService);
        }
    };
});
System.register("app/core/header/header", ["@angular/core", "app/services/msn.service", "@angular/router"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, msn_service_1, router_1, HeaderComponent;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            HeaderComponent = (function () {
                function HeaderComponent(msnService) {
                    this.msnService = msnService;
                    this.init();
                    this.UserCity = 'Choose City';
                }
                HeaderComponent.prototype.init = function () {
                    this.loadCategories();
                    this.loadCities();
                };
                HeaderComponent.prototype.ngAfterViewInit = function () {
                    setTimeout(function () {
                        $('#ineed-menu').smartmenus({
                            subMenusSubOffsetX: 1,
                            subMenusSubOffsetY: -11
                        });
                    }, 500);
                    setTimeout(function () {
                        $('#findwork-menu').smartmenus({
                            subMenusSubOffsetX: 1,
                            subMenusSubOffsetY: -11
                        });
                    }, 500);
                };
                HeaderComponent.prototype.loadCategories = function () {
                    var _this = this;
                    var categoriesOperation;
                    categoriesOperation = this.msnService.getCategories();
                    // Subscribe to observable
                    categoriesOperation.subscribe(function (categories) {
                        console.log(categories);
                        _this.categories = categories;
                        _this.ngAfterViewInit();
                    }, function (err) {
                        // Log errors if any
                        console.log(err);
                    });
                };
                HeaderComponent.prototype.loadCities = function () {
                    var _this = this;
                    var citiesOperation;
                    citiesOperation = this.msnService.getCities();
                    // Subscribe to observable
                    citiesOperation.subscribe(function (cities) {
                        console.log(cities);
                        _this.cities = cities;
                    }, function (err) {
                        // Log errors if any
                        console.log(err);
                    });
                };
                HeaderComponent.prototype.onCityChange = function (value) {
                    this.UserCity = value;
                };
                return HeaderComponent;
            }());
            HeaderComponent = __decorate([
                core_3.Component({
                    selector: 'header',
                    templateUrl: 'app/core/header/header.html',
                    styleUrls: ['app/core/header/header.css'],
                    providers: [msn_service_1.MSNService, router_1.RouterLink]
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService])
            ], HeaderComponent);
            exports_4("HeaderComponent", HeaderComponent);
        }
    };
});
System.register("app/services/msn.login", ["@angular/core", "rxjs/Observable", "app/app.config", "@angular/http"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4, Observable_2, app_config_2, http_2, LoginService;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (Observable_2_1) {
                Observable_2 = Observable_2_1;
            },
            function (app_config_2_1) {
                app_config_2 = app_config_2_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            }
        ],
        execute: function () {
            LoginService = (function () {
                function LoginService(http) {
                    this.http = http;
                    this.isUserLogin = false;
                    this.userDetails = {};
                    this.config = {
                        ServiceApi: app_config_2.MSN_DI_CONFIG.MSNServiceApi,
                        HostApi: app_config_2.MSN_DI_CONFIG.MSNHost
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
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
                    headers.append('Authorization', "Bearer " + user.externalAccessToken);
                    //	headers.append('Access-Control-Allow-Origin', '*');
                    var options = new http_2.RequestOptions({ headers: headers });
                    var json = JSON.stringify(user);
                    return this.http.post(this.config.HostApi + 'api/Account/RegisterExternalToken', user, options)
                        .map(function (res) {
                        return res.json();
                    })
                        .catch(function (error) { return Observable_2.Observable.throw(error.json().error || 'Server error'); });
                };
                LoginService.prototype.loginUserInfo = function (user) {
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
                    headers.append('Authorization', "Bearer " + user.token);
                    //	headers.append('Access-Control-Allow-Origin', '*');
                    var options = new http_2.RequestOptions({ headers: headers });
                    var json = JSON.stringify(user);
                    return this.http.get(this.config.HostApi + 'api/Account/UserInfo', options)
                        .map(function (res) {
                        return res.json();
                    })
                        .catch(function (error) { return Observable_2.Observable.throw(error.json().error || 'Server error'); });
                };
                return LoginService;
            }());
            LoginService = __decorate([
                core_4.Injectable(),
                __metadata("design:paramtypes", [http_2.Http])
            ], LoginService);
            exports_5("LoginService", LoginService);
        }
    };
});
System.register("app/core/header/login/login", ["@angular/core", "app/services/msn.service", "app/services/msn.login", "@angular/router", "ng2-bootstrap", "angular-google-signin"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_5, msn_service_2, msn_login_1, router_2, ng2_bootstrap_1, angular_google_signin_1, LoginComponent;
    return {
        setters: [
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (msn_service_2_1) {
                msn_service_2 = msn_service_2_1;
            },
            function (msn_login_1_1) {
                msn_login_1 = msn_login_1_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
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
                return LoginComponent;
            }());
            __decorate([
                core_5.ViewChild('myLoginModal'),
                __metadata("design:type", ng2_bootstrap_1.ModalDirective)
            ], LoginComponent.prototype, "myLoginModal", void 0);
            LoginComponent = __decorate([
                core_5.Component({
                    selector: 'login',
                    templateUrl: 'app/core/header/login/login.html',
                    styleUrls: ['app/core/header/login/login.css'],
                    providers: [msn_service_2.MSNService, msn_login_1.LoginService, router_2.RouterLink, angular_google_signin_1.GoogleSignInComponent]
                }),
                __metadata("design:paramtypes", [msn_service_2.MSNService, msn_login_1.LoginService, core_5.NgZone])
            ], LoginComponent);
            exports_6("LoginComponent", LoginComponent);
        }
    };
});
System.register("app/core/topmenu/topmenu", ["@angular/core", "ng2-bootstrap", "@angular/router"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_6, ng2_bootstrap_2, router_3, TopMenuComponent;
    return {
        setters: [
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (ng2_bootstrap_2_1) {
                ng2_bootstrap_2 = ng2_bootstrap_2_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            }
        ],
        execute: function () {
            TopMenuComponent = (function () {
                function TopMenuComponent(router) {
                    this.router = router;
                }
                return TopMenuComponent;
            }());
            TopMenuComponent = __decorate([
                core_6.Component({
                    selector: 'leftmenu',
                    templateUrl: 'app/core/topmenu/topmenu.html',
                    styleUrls: ['app/core/topmenu/topmenu.css'],
                    providers: [ng2_bootstrap_2.AccordionComponent, ng2_bootstrap_2.AccordionPanelComponent],
                    directives: [router_3.ROUTER_DIRECTIVES]
                }),
                __metadata("design:paramtypes", [router_3.Router])
            ], TopMenuComponent);
            exports_7("TopMenuComponent", TopMenuComponent);
        }
    };
});
System.register("app/core/userview/userview", ["@angular/core", "@angular/router"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_7, router_4, UserViewComponent;
    return {
        setters: [
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            }
        ],
        execute: function () {
            //@Injectable()
            UserViewComponent = (function () {
                function UserViewComponent(_router) {
                    this._router = _router;
                    this.lat = 17.440080;
                    this.lng = 78.348917;
                    this.findCurrentLocation();
                }
                UserViewComponent.prototype.findCurrentLocation = function () {
                    var _this = this;
                    // Try HTML5 geolocation.
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            _this.lat = position.coords.latitude;
                            _this.lng = position.coords.longitude;
                            //_this.lat = 16.306652;
                            //_this.lng = 80.436240;
                            if (google.maps == undefined)
                                _this._router.navigateByUrl('home');
                            else
                                _this.findCity();
                        }, function (ob) {
                            //alert('error' + ob);
                            console.log(ob);
                            _this._router.navigateByUrl('home');
                        }, { maximumAge: 60000, timeout: 50000, enableHighAccuracy: true });
                    }
                    else {
                        // Browser doesn't support Geolocation
                        alert('error');
                    }
                };
                UserViewComponent.prototype.findCity = function () {
                    var geocoder;
                    geocoder = new google.maps.Geocoder();
                    var latlng = new google.maps.LatLng(this.lat, this.lng);
                    var _this = this;
                    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                var value = results[0].address_components;
                                //	var value = add.split(",");
                                var count = value.length;
                                //country = value[count - 1];
                                //state = value[count - 2];
                                _this.city = value[count - 5].long_name;
                                _this._router.navigateByUrl(_this.city.trim());
                            }
                            else {
                                alert("address not found");
                            }
                        }
                        else {
                            alert("Geocoder failed due to: " + status);
                        }
                    });
                };
                return UserViewComponent;
            }());
            UserViewComponent = __decorate([
                core_7.Component({
                    selector: 'userview',
                    templateUrl: 'app/core/userview/userview.html',
                    styleUrls: ['app/core/userview/userview.css'],
                    providers: [],
                    directives: []
                }),
                __metadata("design:paramtypes", [router_4.Router])
            ], UserViewComponent);
            exports_8("UserViewComponent", UserViewComponent);
        }
    };
});
System.register("app/core/userview/user/registeruser", ["@angular/core", "app/services/msn.service", "@angular/router"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_8, msn_service_3, router_5, RegisterUserComponent;
    return {
        setters: [
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (msn_service_3_1) {
                msn_service_3 = msn_service_3_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
            }
        ],
        execute: function () {
            RegisterUserComponent = (function () {
                function RegisterUserComponent(mSNService, router) {
                    this.mSNService = mSNService;
                    this.router = router;
                    this.init();
                    this.userdetails = [];
                }
                RegisterUserComponent.prototype.init = function () {
                    //this.mSNService.getContext(
                    //    context => this.OnContextLoaded(context)
                    //);
                };
                RegisterUserComponent.prototype.OnContextLoaded = function (context) {
                    //var _this = this;
                    //_this.context = context;
                };
                RegisterUserComponent.prototype.saveUser = function (user) {
                    // var userdetails=[];
                    var _this = this;
                    this.userdetails.NAME = user.NAME;
                    this.userdetails.EMAIL = user.EMAIL;
                    this.userdetails.PHONE = user.PHONE;
                    this.userdetails.PWD = user.PWD;
                    //this.context.ADMININFOes.add(this.userdetails);
                    //this.context.saveChanges().then(function () {
                    //    _this.router.navigate(['manageadmins']);
                    //});
                };
                return RegisterUserComponent;
            }());
            RegisterUserComponent = __decorate([
                core_8.Component({
                    selector: 'registeruser',
                    templateUrl: 'app/core/userview/user/registeruser.html',
                }),
                __metadata("design:paramtypes", [msn_service_3.MSNService, router_5.Router])
            ], RegisterUserComponent);
            exports_9("RegisterUserComponent", RegisterUserComponent);
        }
    };
});
System.register("app/core/userview/user/edituser", ["@angular/core", "app/services/msn.service", "@angular/router"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_9, msn_service_4, router_6, EditUserComponent;
    return {
        setters: [
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (msn_service_4_1) {
                msn_service_4 = msn_service_4_1;
            },
            function (router_6_1) {
                router_6 = router_6_1;
            }
        ],
        execute: function () {
            EditUserComponent = (function () {
                function EditUserComponent(mSNService, route, router) {
                    this.mSNService = mSNService;
                    this.route = route;
                    this.router = router;
                    this.init();
                    this.userdetails = [];
                }
                EditUserComponent.prototype.init = function () {
                    var _this = this;
                    this.mSNService.getContext(function (context) { return _this.OnContextLoaded(context); });
                };
                EditUserComponent.prototype.OnContextLoaded = function (context) {
                    var _this = this;
                    _this.context = context;
                    var adminid = _this.route.snapshot.params['id'];
                    _this.context.ADMININFOes.first("x=> x.ID == this.Adminid", { Adminid: adminid })
                        .then(function (admininfoes) {
                        _this.userdetails = JSON.parse(JSON.stringify(admininfoes));
                        _this.userdetailsorig = admininfoes;
                    });
                };
                EditUserComponent.prototype.saveUser = function (user) {
                    this.context.ADMININFOes.attachOrGet(this.userdetailsorig);
                    var _this = this;
                    this.userdetailsorig.NAME = user.NAME;
                    this.userdetailsorig.EMAIL = user.EMAIL;
                    this.userdetailsorig.PHONE = user.PHONE;
                    this.userdetailsorig.PWD = user.PWD;
                    //this.userdetailsorig.ID = 2;
                    //	this.context.ADMININFOes.add(this.userdetailsorig);
                    console.log(user);
                    this.context.saveChanges().then(function () {
                        _this.router.navigate(['manageadmins']);
                    });
                };
                return EditUserComponent;
            }());
            EditUserComponent = __decorate([
                core_9.Component({
                    selector: 'editadmin',
                    templateUrl: 'app/core/userview/user/edituser.html',
                }),
                __metadata("design:paramtypes", [msn_service_4.MSNService, router_6.ActivatedRoute, router_6.Router])
            ], EditUserComponent);
            exports_10("EditUserComponent", EditUserComponent);
        }
    };
});
System.register("app/core/userview/servicesearch/servicesearch", ["@angular/core", "app/services/msn.service"], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_10, msn_service_5, ServiceSearchComponent;
    return {
        setters: [
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (msn_service_5_1) {
                msn_service_5 = msn_service_5_1;
            }
        ],
        execute: function () {
            ServiceSearchComponent = (function () {
                function ServiceSearchComponent(msnService) {
                    this.msnService = msnService;
                    //this.currentcity = 'Hyderabad';
                    this.loadCities();
                    this.loadCategories();
                }
                ServiceSearchComponent.prototype.loadCities = function () {
                    var _this = this;
                    var citiesOperation;
                    citiesOperation = this.msnService.getCities();
                    // Subscribe to observable
                    citiesOperation.subscribe(function (cities) {
                        console.log(cities);
                        _this.cities = cities;
                    }, function (err) {
                        // Log errors if any
                        console.log(err);
                    });
                };
                ServiceSearchComponent.prototype.loadCategories = function () {
                    var _this = this;
                    var categoriesOperation;
                    categoriesOperation = this.msnService.getCategories();
                    // Subscribe to observable
                    categoriesOperation.subscribe(function (categories) {
                        console.log(categories);
                        _this.categories = categories;
                    }, function (err) {
                        // Log errors if any
                        console.log(err);
                    });
                };
                ServiceSearchComponent.prototype.onCategoryChange = function (value) {
                    var _this = this;
                    this.categories.filter(function (x) { return x.ID == value; }).map(function (data) { return _this.subcategories = data.SERVICESUBCATEGORies; });
                };
                ServiceSearchComponent.prototype.onCityChange = function (value) {
                    var _this = this;
                    this.areas = [];
                    this.cities.filter(function (x) { return x.ID == value.ID; }).map(function (data) { return _this.areas = data.CITYAREAs; });
                    console.log(this.areas);
                };
                return ServiceSearchComponent;
            }());
            ServiceSearchComponent = __decorate([
                core_10.Component({
                    selector: 'servicesearch',
                    templateUrl: 'app/core/userview/servicesearch/servicesearch.html',
                    styleUrls: ['app/core/userview/servicesearch/servicesearch.css'],
                    providers: [msn_service_5.MSNService],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_5.MSNService])
            ], ServiceSearchComponent);
            exports_11("ServiceSearchComponent", ServiceSearchComponent);
        }
    };
});
System.register("app/core/userview/postservice/serviceinfo/serviceinfo", ["@angular/core", "@angular/router", "ng2-cloudinary", "app/services/msn.service"], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_11, router_7, ng2_cloudinary_1, msn_service_6, ServiceInfoComponent;
    return {
        setters: [
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (router_7_1) {
                router_7 = router_7_1;
            },
            function (ng2_cloudinary_1_1) {
                ng2_cloudinary_1 = ng2_cloudinary_1_1;
            },
            function (msn_service_6_1) {
                msn_service_6 = msn_service_6_1;
            }
        ],
        execute: function () {
            ServiceInfoComponent = (function () {
                function ServiceInfoComponent(msnService, router, route) {
                    this.msnService = msnService;
                    this.router = router;
                    this.route = route;
                    this.serviceinfoChange = new core_11.EventEmitter();
                    this.uploadedimages = [];
                    this.cloudinaryOptions = new ng2_cloudinary_1.CloudinaryOptions({
                        cloud_name: 'myserviceneed',
                        upload_preset: 'e8pd1qgk',
                        autoUpload: true,
                        api_key: 375471576546793,
                        api_secret: "u0oknAWF4KFEswzF-OOs_KubB30"
                    });
                    this.uploader = new ng2_cloudinary_1.CloudinaryUploader(this.cloudinaryOptions);
                    var _self = this;
                    //Override onSuccessItem function to record cloudinary response data
                    this.uploader.onSuccessItem = function (item, response, status, headers) {
                        //response is the cloudinary response
                        //see http://cloudinary.com/documentation/upload_images#upload_response
                        var image = JSON.parse(response);
                        _self.serviceinfo.uploadedimages.push(image.public_id);
                        //	_self.serviceinfo.uploadedimages = _self.serviceinfo.uploadedimages.push( _self.uploadedimages);
                        return { item: item, response: response, status: status, headers: headers };
                    };
                }
                ServiceInfoComponent.prototype.ngOnInit = function () {
                };
                ServiceInfoComponent.prototype.titleChange = function (value) {
                    this.serviceinfoChange.emit(this.serviceinfo);
                };
                ServiceInfoComponent.prototype.descriptionChange = function (value) {
                    this.serviceinfoChange.emit(this.serviceinfo);
                };
                return ServiceInfoComponent;
            }());
            __decorate([
                core_11.Input(),
                __metadata("design:type", Object)
            ], ServiceInfoComponent.prototype, "serviceinfo", void 0);
            __decorate([
                core_11.Output(),
                __metadata("design:type", core_11.EventEmitter)
            ], ServiceInfoComponent.prototype, "serviceinfoChange", void 0);
            ServiceInfoComponent = __decorate([
                core_11.Component({
                    selector: 'serviceinfo',
                    templateUrl: 'app/core/userview/postservice/serviceinfo/serviceinfo.html',
                    styleUrls: ['app/core/userview/postservice/serviceinfo/serviceinfo.css'],
                    providers: [msn_service_6.MSNService],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_6.MSNService, router_7.Router, router_7.ActivatedRoute])
            ], ServiceInfoComponent);
            exports_12("ServiceInfoComponent", ServiceInfoComponent);
        }
    };
});
System.register("app/types/postServiceRoute", [], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var Dictionary, postServiceRoute;
    return {
        setters: [],
        execute: function () {
            Dictionary = (function () {
                function Dictionary(init) {
                    this._keys = new Array();
                    this._values = new Array();
                    for (var x = 0; x < init.length; x++) {
                        this[init[x].key] = init[x].value;
                        this._keys.push(init[x].key);
                        this._values.push(init[x].value);
                    }
                }
                Dictionary.prototype.add = function (key, value) {
                    this[key] = value;
                    this._keys.push(key);
                    this._values.push(value);
                };
                Dictionary.prototype.remove = function (key) {
                    var index = this._keys.indexOf(key, 0);
                    this._keys.splice(index, 1);
                    this._values.splice(index, 1);
                    delete this[key];
                };
                Dictionary.prototype.keys = function () {
                    return this._keys;
                };
                Dictionary.prototype.values = function () {
                    return this._values;
                };
                Dictionary.prototype.containsKey = function (key) {
                    if (typeof this[key] === "undefined") {
                        return false;
                    }
                    return true;
                };
                Dictionary.prototype.toLookup = function () {
                    return this;
                };
                return Dictionary;
            }());
            postServiceRoute = (function (_super) {
                __extends(postServiceRoute, _super);
                function postServiceRoute(init) {
                    return _super.call(this, init) || this;
                }
                postServiceRoute.prototype.values = function () {
                    return this._values;
                };
                postServiceRoute.prototype.toLookup = function () {
                    return this;
                };
                return postServiceRoute;
            }(Dictionary));
            exports_13("postServiceRoute", postServiceRoute);
        }
    };
});
System.register("app/types/postServiceRequest", [], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var PostData;
    return {
        setters: [],
        execute: function () {
            PostData = (function () {
                function PostData() {
                    this.title = '';
                    this.description = '';
                    this.mobile = '';
                    this.username = '';
                    this.address = '';
                    this.servicestartdate = '';
                    this.serviceenddate = '';
                    this.service_start_time = new Date();
                    this.latitude = 0;
                    this.longitude = 0;
                    this.zoom = 15;
                    this.servicesubcategoryid = 0;
                    this.uploadedimages = [];
                }
                return PostData;
            }());
            exports_14("PostData", PostData);
        }
    };
});
System.register("app/core/userview/postservice/postservice", ["@angular/core", "@angular/router", "app/core/userview/servicesearch/servicesearch", "app/services/msn.service", "app/types/postServiceRoute", "app/types/postServiceRequest"], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var core_12, router_8, servicesearch_1, msn_service_7, postServiceRoute_1, postServiceRequest_1, PostServiceComponent;
    return {
        setters: [
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (router_8_1) {
                router_8 = router_8_1;
            },
            function (servicesearch_1_1) {
                servicesearch_1 = servicesearch_1_1;
            },
            function (msn_service_7_1) {
                msn_service_7 = msn_service_7_1;
            },
            function (postServiceRoute_1_1) {
                postServiceRoute_1 = postServiceRoute_1_1;
            },
            function (postServiceRequest_1_1) {
                postServiceRequest_1 = postServiceRequest_1_1;
            }
        ],
        execute: function () {
            PostServiceComponent = (function () {
                function PostServiceComponent(msnService, router, route) {
                    var _this = this;
                    this.msnService = msnService;
                    this.router = router;
                    this.route = route;
                    this.validationMessage = "";
                    this.serviceObject = new postServiceRequest_1.PostData();
                    this.handleInitialLoad();
                    this.router.events.subscribe(function (event) {
                        // Handle route change
                        _this.handleInitialLoad();
                    });
                }
                PostServiceComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (params) {
                        if (params['id']) {
                            //	this.serviceid = params['id'];
                            _this.serviceObject.servicesubcategoryid = params['id'];
                        }
                    });
                };
                PostServiceComponent.prototype.handleInitialLoad = function () {
                    this.postServiceRoutes = [];
                    this.postServiceRoutes = new postServiceRoute_1.postServiceRoute([
                        { key: "serviceinfo", value: { current: "serviceinfo", next: "address", previous: "", isActive: true } },
                        { key: "address", value: { current: "address", next: "servicetime", previous: "serviceinfo", isActive: false } },
                        { key: "servicetime", value: { current: "servicetime", next: "userverify", previous: "address", isActive: false } },
                        { key: "userverify", value: { current: "userverify", next: "", previous: "servicetime", isActive: false } },
                    ]).toLookup();
                    this.displayActiveRoute();
                    //this.serviceObject = [];
                };
                PostServiceComponent.prototype.displayActiveRoute = function () {
                    var _this = this;
                    Object.keys(this.postServiceRoutes).forEach(function (key) {
                        if (_this.postServiceRoutes[key].isActive) {
                            _this.curretRoute = _this.postServiceRoutes[key];
                            console.log(_this.curretRoute);
                        }
                    });
                };
                PostServiceComponent.prototype.handlePrevious = function (event) {
                    this.postServiceRoutes[this.curretRoute.current].isActive = false;
                    this.postServiceRoutes[this.curretRoute.previous].isActive = true;
                    this.displayActiveRoute();
                };
                PostServiceComponent.prototype.handleNext = function (event) {
                    if (this.isPostInfoValid()) {
                        this.postServiceRoutes[this.curretRoute.current].isActive = false;
                        this.postServiceRoutes[this.curretRoute.next].isActive = true;
                        this.displayActiveRoute();
                    }
                };
                PostServiceComponent.prototype.isPostInfoValid = function () {
                    this.validationMessage = "";
                    if (this.curretRoute.current == "serviceinfo") {
                        if (this.serviceObject.description == "")
                            this.validationMessage = "Please provide service description.";
                        if (this.serviceObject.title == "")
                            this.validationMessage = "Please provide service title.";
                    }
                    if (this.curretRoute.current == "address") {
                        if (this.serviceObject.address == "")
                            this.validationMessage = "Please provide service address.";
                    }
                    if (this.curretRoute.current == "servicetime") {
                        if (this.serviceObject.servicestartdate == "" && this.serviceObject.serviceenddate == "") {
                            this.validationMessage = "Please provide Service Date Details";
                        }
                        if (this.serviceObject.service_start_time == null)
                            this.validationMessage = "Please provide Service Time Details";
                    }
                    if (this.validationMessage == "")
                        return true;
                    else
                        return false;
                };
                PostServiceComponent.prototype.postService = function () {
                    var _this = this;
                    console.log(this.serviceObject);
                    var userneedOperation;
                    //this.serviceObject.address.replace('\n', '<br/>');
                    userneedOperation = this.msnService.postUserServiceNeed(this.serviceObject);
                    // Subscribe to observable
                    userneedOperation.subscribe(function (postedneed) {
                        console.log(postedneed);
                        _this.router.navigate(['/userneeds', '']);
                    }, function (err) {
                        // Log errors if any
                        console.log(err);
                    });
                };
                return PostServiceComponent;
            }());
            PostServiceComponent = __decorate([
                core_12.Component({
                    selector: 'postservice',
                    templateUrl: 'app/core/userview/postservice/postservice.html',
                    styleUrls: ['app/core/userview/postservice/postservice.css'],
                    providers: [servicesearch_1.ServiceSearchComponent, msn_service_7.MSNService],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_7.MSNService, router_8.Router, router_8.ActivatedRoute])
            ], PostServiceComponent);
            exports_15("PostServiceComponent", PostServiceComponent);
        }
    };
});
System.register("app/core/userview/default/default", ["@angular/core", "app/services/msn.service", "ng2-bootstrap", "@angular/router", "ng2-cloudinary"], function (exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_13, msn_service_8, core_14, ng2_bootstrap_3, router_9, ng2_cloudinary_2, DefaultViewComponent;
    return {
        setters: [
            function (core_13_1) {
                core_13 = core_13_1;
                core_14 = core_13_1;
            },
            function (msn_service_8_1) {
                msn_service_8 = msn_service_8_1;
            },
            function (ng2_bootstrap_3_1) {
                ng2_bootstrap_3 = ng2_bootstrap_3_1;
            },
            function (router_9_1) {
                router_9 = router_9_1;
            },
            function (ng2_cloudinary_2_1) {
                ng2_cloudinary_2 = ng2_cloudinary_2_1;
            }
        ],
        execute: function () {
            DefaultViewComponent = (function () {
                //  searchUrl: string = "http://localhost/MSNServiceApi/api/FetchServices?search=:keyword";
                function DefaultViewComponent(msnService, router) {
                    this.msnService = msnService;
                    this.router = router;
                    this.cloudinaryOptions = new ng2_cloudinary_2.CloudinaryOptions({
                        cloud_name: 'myserviceneed',
                        upload_preset: 'e8pd1qgk',
                        autoUpload: true,
                        api_key: 375471576546793,
                        api_secret: "u0oknAWF4KFEswzF-OOs_KubB30"
                    });
                    this.searchString = "";
                    this.avilableServices = this.msnService.getAvailableServicesURL();
                    this.loadCategories();
                }
                DefaultViewComponent.prototype.loadCategories = function () {
                    var _this = this;
                    // Subscribe to observable
                    this.msnService.getCategories().subscribe(function (categories) {
                        console.log(categories);
                        _this.categories = categories;
                    }, function (err) {
                        // Log errors if any
                        console.log(err);
                    });
                };
                DefaultViewComponent.prototype.serviceSelected = function (object) {
                    if (object && object.NAME)
                        this.router.navigate(['postservice', object.ID]);
                    // this.router.navigateByUrl('postservice/' + object.ID);
                    console.log(object);
                };
                DefaultViewComponent.prototype.viewAll = function (data) {
                    console.log(data);
                    this.selectedAllServices = data;
                    this.allServicesModal.open();
                };
                return DefaultViewComponent;
            }());
            __decorate([
                core_14.ViewChild('allServicesModal'),
                __metadata("design:type", ng2_bootstrap_3.ModalDirective)
            ], DefaultViewComponent.prototype, "allServicesModal", void 0);
            DefaultViewComponent = __decorate([
                core_13.Component({
                    selector: 'userview',
                    templateUrl: 'app/core/userview/default/default.html',
                    styleUrls: ['app/core/userview/default/default.css'],
                    providers: [msn_service_8.MSNService, router_9.RouterLink],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_8.MSNService, router_9.Router])
            ], DefaultViewComponent);
            exports_16("DefaultViewComponent", DefaultViewComponent);
        }
    };
});
System.register("app/services/msn.pager", ["underscore"], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var _, PagerService;
    return {
        setters: [
            function (_3) {
                _ = _3;
            }
        ],
        execute: function () {
            PagerService = (function () {
                function PagerService() {
                }
                PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
                    if (currentPage === void 0) { currentPage = 1; }
                    if (pageSize === void 0) { pageSize = 10; }
                    // calculate total pages
                    var totalPages = Math.ceil(totalItems / pageSize);
                    var startPage, endPage;
                    if (totalPages <= 10) {
                        // less than 10 total pages so show all
                        startPage = 1;
                        endPage = totalPages;
                    }
                    else {
                        // more than 10 total pages so calculate start and end pages
                        if (currentPage <= 6) {
                            startPage = 1;
                            endPage = 10;
                        }
                        else if (currentPage + 4 >= totalPages) {
                            startPage = totalPages - 9;
                            endPage = totalPages;
                        }
                        else {
                            startPage = currentPage - 5;
                            endPage = currentPage + 4;
                        }
                    }
                    // calculate start and end item indexes
                    var startIndex = (currentPage - 1) * pageSize;
                    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
                    // create an array of pages to ng-repeat in the pager control
                    var pages = _.range(startPage, endPage + 1);
                    // return object with all pager properties required by the view
                    return {
                        totalItems: totalItems,
                        currentPage: currentPage,
                        pageSize: pageSize,
                        totalPages: totalPages,
                        startPage: startPage,
                        endPage: endPage,
                        startIndex: startIndex,
                        endIndex: endIndex,
                        pages: pages
                    };
                };
                return PagerService;
            }());
            exports_17("PagerService", PagerService);
        }
    };
});
System.register("app/core/userview/findwork/listviewwork/listviewwork", ["@angular/core", "app/services/msn.service", "app/services/msn.pager", "@angular/router", "angular2-google-maps/core"], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var core_15, msn_service_9, msn_pager_1, router_10, core_16, ListViewWorkComponent;
    return {
        setters: [
            function (core_15_1) {
                core_15 = core_15_1;
            },
            function (msn_service_9_1) {
                msn_service_9 = msn_service_9_1;
            },
            function (msn_pager_1_1) {
                msn_pager_1 = msn_pager_1_1;
            },
            function (router_10_1) {
                router_10 = router_10_1;
            },
            function (core_16_1) {
                core_16 = core_16_1;
            }
        ],
        execute: function () {
            ListViewWorkComponent = (function () {
                function ListViewWorkComponent(msnService, pagerService, router, zone, _loader) {
                    //  this.servicessearch = [];
                    //  this.avilableServices = this.msnService.getAvailableServicesURL();
                    this.msnService = msnService;
                    this.pagerService = pagerService;
                    this.router = router;
                    this.zone = zone;
                    this._loader = _loader;
                    // pager object
                    this.pager = {};
                }
                ListViewWorkComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // get dummy data
                    this.msnService.getServiceWorks()
                        .subscribe(function (data) {
                        // set items to json response
                        _this.allItems = data;
                        // initialize to page 1
                        _this.setPage(1);
                    });
                };
                ListViewWorkComponent.prototype.setPage = function (page) {
                    if (page < 1 || page > this.pager.totalPages) {
                        return;
                    }
                    // get pager object from service
                    this.pager = this.pagerService.getPager(this.allItems.length, page);
                    // get current page of items
                    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
                };
                return ListViewWorkComponent;
            }());
            ListViewWorkComponent = __decorate([
                core_15.Component({
                    selector: 'listviewwork',
                    templateUrl: 'app/core/userview/findwork/listviewwork/listviewwork.html',
                    styleUrls: ['app/core/userview/findwork/listviewwork/listviewwork.css'],
                    providers: [msn_service_9.MSNService, msn_pager_1.PagerService],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_9.MSNService, msn_pager_1.PagerService, router_10.Router, core_15.NgZone, core_16.MapsAPILoader])
            ], ListViewWorkComponent);
            exports_18("ListViewWorkComponent", ListViewWorkComponent);
        }
    };
});
System.register("app/shared/directives/googleplace.directive", ["@angular/core", "@angular/forms"], function (exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var core_17, forms_1, GoogleplaceDirective;
    return {
        setters: [
            function (core_17_1) {
                core_17 = core_17_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            GoogleplaceDirective = (function () {
                function GoogleplaceDirective(el, model) {
                    var _this = this;
                    this.model = model;
                    this.setAddress = new core_17.EventEmitter();
                    this._el = el.nativeElement;
                    this.modelValue = this.model;
                    var input = this._el;
                    this.autocomplete = new google.maps.places.Autocomplete(input, {});
                    google.maps.event.addListener(this.autocomplete, 'place_changed', function () {
                        var place = _this.autocomplete.getPlace();
                        _this.invokeEvent(place);
                    });
                }
                GoogleplaceDirective.prototype.invokeEvent = function (place) {
                    this.setAddress.emit(place);
                };
                GoogleplaceDirective.prototype.onInputChange = function () {
                };
                return GoogleplaceDirective;
            }());
            __decorate([
                core_17.Output(),
                __metadata("design:type", core_17.EventEmitter)
            ], GoogleplaceDirective.prototype, "setAddress", void 0);
            GoogleplaceDirective = __decorate([
                core_17.Directive({
                    selector: '[googleplace]',
                    providers: [forms_1.NgModel],
                    host: {
                        '(input)': 'onInputChange()'
                    }
                }),
                __metadata("design:paramtypes", [core_17.ElementRef, forms_1.NgModel])
            ], GoogleplaceDirective);
            exports_19("GoogleplaceDirective", GoogleplaceDirective);
        }
    };
});
System.register("app/core/userview/findwork/mapviewwork/mapviewwork", ["@angular/core", "@angular/router", "angular2-google-maps/core", "app/services/msn.service", "rxjs/Observable"], function (exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var core_18, router_11, core_19, msn_service_10, Observable_3, MapViewWorkComponent;
    return {
        setters: [
            function (core_18_1) {
                core_18 = core_18_1;
            },
            function (router_11_1) {
                router_11 = router_11_1;
            },
            function (core_19_1) {
                core_19 = core_19_1;
            },
            function (msn_service_10_1) {
                msn_service_10 = msn_service_10_1;
            },
            function (Observable_3_1) {
                Observable_3 = Observable_3_1;
            }
        ],
        execute: function () {
            //@Injectable()
            MapViewWorkComponent = (function () {
                function MapViewWorkComponent(msnService, _router, zone, _loader, differs) {
                    this.msnService = msnService;
                    this._router = _router;
                    this.zone = zone;
                    this._loader = _loader;
                    this.differs = differs;
                    this.onServiceSelected = new core_18.EventEmitter();
                    this.differ = differs.find({}).create(null);
                    //    this.findCurrentLocation();
                    //  this.loadAutocomplete()
                }
                MapViewWorkComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // get dummy data
                    this.msnService.getServiceWorks(this.servicessearch)
                        .subscribe(function (data) {
                        // set items to json response
                        _this.allItems = data;
                    });
                };
                MapViewWorkComponent.prototype.ngDoCheck = function () {
                    var changes = this.differ.diff(this.servicessearch);
                    if (changes) {
                        console.log('changes detected' + changes);
                        this.ngOnInit();
                    }
                    else {
                    }
                };
                MapViewWorkComponent.prototype.selectedService = function (selectedService) {
                    // this.selectedService. = selectedService;
                    this.onServiceSelected.emit({
                        value: selectedService
                    });
                };
                MapViewWorkComponent.prototype.mapBoundsChange = function (bounds) {
                    console.log(bounds);
                    var ne = bounds.getNorthEast();
                    var sw = bounds.getSouthWest();
                    this.servicessearch.nelatitude = ne.lat();
                    this.servicessearch.swlatitude = sw.lat();
                    this.servicessearch.nelongitude = ne.lng();
                    this.servicessearch.swlongitude = sw.lng();
                };
                return MapViewWorkComponent;
            }());
            __decorate([
                core_18.Input(),
                __metadata("design:type", Observable_3.Observable)
            ], MapViewWorkComponent.prototype, "servicessearch", void 0);
            __decorate([
                core_18.Output(),
                __metadata("design:type", Object)
            ], MapViewWorkComponent.prototype, "onServiceSelected", void 0);
            MapViewWorkComponent = __decorate([
                core_18.Component({
                    selector: 'mapviewwork',
                    templateUrl: 'app/core/userview/findwork/mapviewwork/mapviewwork.html',
                    styleUrls: ['app/core/userview/findwork/mapviewwork/mapviewwork.css'],
                    providers: []
                }),
                __metadata("design:paramtypes", [msn_service_10.MSNService, router_11.Router, core_18.NgZone, core_19.MapsAPILoader, core_18.KeyValueDiffers])
            ], MapViewWorkComponent);
            exports_20("MapViewWorkComponent", MapViewWorkComponent);
        }
    };
});
System.register("app/core/userview/findwork/findwork", ["@angular/core", "app/services/msn.service", "app/services/msn.pager", "@angular/router", "angular2-google-maps/core"], function (exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var core_20, msn_service_11, msn_pager_2, router_12, core_21, FindWorkComponent;
    return {
        setters: [
            function (core_20_1) {
                core_20 = core_20_1;
            },
            function (msn_service_11_1) {
                msn_service_11 = msn_service_11_1;
            },
            function (msn_pager_2_1) {
                msn_pager_2 = msn_pager_2_1;
            },
            function (router_12_1) {
                router_12 = router_12_1;
            },
            function (core_21_1) {
                core_21 = core_21_1;
            }
        ],
        execute: function () {
            FindWorkComponent = (function () {
                //  searchUrl: string = "http://localhost/MSNServiceApi/api/FetchServices?search=:keyword";
                function FindWorkComponent(msnService, pagerService, router, route, zone, _loader) {
                    this.msnService = msnService;
                    this.pagerService = pagerService;
                    this.router = router;
                    this.route = route;
                    this.zone = zone;
                    this._loader = _loader;
                    this.listview = false;
                    this.allupcomming = true;
                    this.datepickerneedonOpts = {
                        startDate: new Date(),
                        autoclose: true,
                        todayBtn: 'linked',
                        todayHighlight: true,
                        assumeNearbyYear: true,
                    };
                    this.datepickerbookedonOpts = {
                        endDate: new Date(),
                        autoclose: true,
                        todayBtn: 'linked',
                        todayHighlight: true,
                        assumeNearbyYear: true
                    };
                    this.servicessearch = {};
                    //this.servicessearch.latitude = 16.3066;
                    //this.servicessearch.longitude = 80.43654;
                    this.servicessearch.zoom = 15;
                    this.servicessearch.needon = '';
                    this.servicessearch.needtill = '';
                    this.servicessearch.bookedon = '';
                    this.avilableServices = this.msnService.getAvailableServicesURL();
                    this.findCurrentLocation();
                    this.loadAutocomplete();
                }
                FindWorkComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (params) {
                        if (params['id']) {
                            //	this.serviceid = params['id'];
                            _this.servicessearch.serviceid = params['id'];
                            // Subscribe to observable
                            _this.msnService.getServiceById(params['id']).subscribe(function (service) {
                                console.log(service);
                                _this.searchString = service.NAME;
                            }, function (err) {
                                // Log errors if any
                                console.log(err);
                            });
                        }
                    });
                };
                FindWorkComponent.prototype.loadAutocomplete = function () {
                    var _this = this;
                    this._loader.load().then(function () {
                        var autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"), {});
                        google.maps.event.addListener(autocomplete, 'place_changed', function () {
                            var place = autocomplete.getPlace();
                            _this.servicessearch.latitude = place.geometry.location.lat();
                            _this.servicessearch.longitude = place.geometry.location.lng();
                            var ne = new google.maps.LatLng(place.geometry.viewport.getNorthEast());
                            var sw = new google.maps.LatLng(place.geometry.viewport.getSouthWest());
                            console.log(place);
                            var dim = { height: 500, width: 500 };
                            _this.servicessearch.zoom = _this.getBoundsZoomLevel(place.geometry.viewport, dim);
                            console.log('zoom' + _this.servicessearch.zoom);
                        });
                    });
                };
                FindWorkComponent.prototype.getBoundsZoomLevel = function (bounds, mapDim) {
                    var WORLD_DIM = { height: 256, width: 256 };
                    var ZOOM_MAX = 21;
                    function latRad(lat) {
                        var sin = Math.sin(lat * Math.PI / 180);
                        var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
                        return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
                    }
                    function zoom(mapPx, worldPx, fraction) {
                        return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
                    }
                    var ne = bounds.getNorthEast();
                    var sw = bounds.getSouthWest();
                    var latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;
                    var lngDiff = ne.lng() - sw.lng();
                    var lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;
                    var latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
                    var lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
                    return Math.min(latZoom, lngZoom, ZOOM_MAX);
                };
                FindWorkComponent.prototype.findCurrentLocation = function () {
                    var _this = this;
                    // Try HTML5 geolocation.
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            _this.servicessearch.latitude = position.coords.latitude;
                            _this.servicessearch.longitude = position.coords.longitude;
                            //_this.findCity();
                        }, function () {
                            //	alert('error');
                            _this.servicessearch.latitude = 20.5937;
                            _this.servicessearch.longitude = 78.9629;
                            _this.servicessearch.zoom = 5;
                        });
                    }
                    else {
                        // Browser doesn't support Geolocation
                        alert('error');
                    }
                };
                FindWorkComponent.prototype.searchServiceSelected = function (object) {
                    if (object && object.NAME)
                        this.servicessearch.serviceid = object.ID;
                    console.log(object);
                };
                FindWorkComponent.prototype.applyDateFilter = function (object) {
                    if (object)
                        this.allupcomming = false;
                };
                FindWorkComponent.prototype.onServiceSelectedView = function (object) {
                    //if (object && object.NAME)
                    //	this.router.navigate(['postservice', object.ID]);
                    // this.router.navigateByUrl('postservice/' + object.ID);
                    this.selectedService = object.value;
                    var d = new Date();
                    var timezone = d.getTimezoneOffset() / 60;
                    //var viewstarttime;
                    this.viewstarttime = this.addTimes(this.selectedService.SERVICESTARTTIME, this.createOffset(new Date()));
                    console.log(object);
                };
                FindWorkComponent.prototype.createOffset = function (date) {
                    var sign = (date.getTimezoneOffset() > 0) ? "-" : "+";
                    var offset = Math.abs(date.getTimezoneOffset());
                    var hours = this.pad(Math.floor(offset / 60));
                    var minutes = this.pad(offset % 60);
                    // return sign + hours + ":" + minutes;
                    return hours + ":" + minutes;
                };
                FindWorkComponent.prototype.pad = function (value) {
                    return value < 10 ? '0' + value : value;
                };
                FindWorkComponent.prototype.addTimes = function (start, end) {
                    var times = [];
                    var times1 = start.split(':');
                    var times2 = end.split(':');
                    for (var i = 0; i < 3; i++) {
                        times1[i] = (isNaN(parseInt(times1[i]))) ? 0 : parseInt(times1[i]);
                        times2[i] = (isNaN(parseInt(times2[i]))) ? 0 : parseInt(times2[i]);
                        times[i] = times1[i] + times2[i];
                    }
                    // var seconds = times[2];
                    var minutes = times[1];
                    var hours = times[0];
                    //if (seconds % 60 === 0) {
                    //    hours += seconds / 60;
                    //}
                    if (minutes / 60 >= 1) {
                        var res = Math.floor(minutes / 60);
                        hours += res;
                        minutes = minutes - (60 * res);
                    }
                    return hours + ':' + minutes;
                };
                FindWorkComponent.prototype.onallupcomming = function (object) {
                    if (this.allupcomming) {
                        this.servicessearch.needon = '';
                        this.servicessearch.needtill = '';
                        this.servicessearch.bookedon = '';
                    }
                    else {
                        this.servicessearch.needon = new Date();
                        this.servicessearch.needtill = new Date();
                        this.servicessearch.bookedon = '';
                    }
                };
                return FindWorkComponent;
            }());
            FindWorkComponent = __decorate([
                core_20.Component({
                    selector: 'findwork',
                    templateUrl: 'app/core/userview/findwork/findwork.html',
                    styleUrls: ['app/core/userview/findwork/findwork.css'],
                    providers: [msn_service_11.MSNService, msn_pager_2.PagerService],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_11.MSNService, msn_pager_2.PagerService, router_12.Router, router_12.ActivatedRoute, core_20.NgZone, core_21.MapsAPILoader])
            ], FindWorkComponent);
            exports_21("FindWorkComponent", FindWorkComponent);
        }
    };
});
System.register("app/core/userview/userneeds/userneeds", ["@angular/core", "app/services/msn.login", "app/services/msn.service", "app/services/msn.pager", "@angular/router", "ng2-bootstrap", "angular2-google-maps/core"], function (exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var core_22, msn_login_2, msn_service_12, msn_pager_3, router_13, ng2_bootstrap_4, core_23, UserNeedsComponent;
    return {
        setters: [
            function (core_22_1) {
                core_22 = core_22_1;
            },
            function (msn_login_2_1) {
                msn_login_2 = msn_login_2_1;
            },
            function (msn_service_12_1) {
                msn_service_12 = msn_service_12_1;
            },
            function (msn_pager_3_1) {
                msn_pager_3 = msn_pager_3_1;
            },
            function (router_13_1) {
                router_13 = router_13_1;
            },
            function (ng2_bootstrap_4_1) {
                ng2_bootstrap_4 = ng2_bootstrap_4_1;
            },
            function (core_23_1) {
                core_23 = core_23_1;
            }
        ],
        execute: function () {
            UserNeedsComponent = (function () {
                function UserNeedsComponent(msnService, loginService, pagerService, router, zone, _loader) {
                    this.msnService = msnService;
                    this.loginService = loginService;
                    this.pagerService = pagerService;
                    this.router = router;
                    this.zone = zone;
                    this._loader = _loader;
                    this.calendarOptions = {
                        format: "DD-MM-YYYY",
                        firstWeekdaySunday: false,
                        minDate: new Date(),
                        //		maxDate: new DateConstructor(). ,
                        initialDate: new Date()
                    };
                    // pager object
                    this.pager = {};
                    // this.servicessearch = [];
                    //  this.avilableServices = this.msnService.getAvailableServicesURL();
                    this.servicessearch = {};
                    this.selectedItem = [];
                    this.initialLoad();
                    this.selectedItem.service_start_time = new Date();
                }
                UserNeedsComponent.prototype.loadUserServices = function () {
                    var _this = this;
                    // get dummy data
                    this.msnService.getServiceWorks(this.servicessearch)
                        .subscribe(function (data) {
                        // set items to json response
                        _this.allItems = data;
                        // initialize to page 1
                        _this.setPage(1);
                    });
                };
                UserNeedsComponent.prototype.setPage = function (page) {
                    if (page < 1 || page > this.pager.totalPages) {
                        return;
                    }
                    // get pager object from service
                    this.pager = this.pagerService.getPager(this.allItems.length, page);
                    // get current page of items
                    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
                };
                UserNeedsComponent.prototype.initialLoad = function () {
                    var _this = this;
                    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    if (currentUser)
                        this.loginService.loginUserInfo(currentUser).subscribe(function (user) {
                            if (user.HasRegistered) {
                                _this.servicessearch.userid = user.ID;
                                _this.loadUserServices();
                            }
                        });
                };
                UserNeedsComponent.prototype.onActionChange = function (value, item) {
                    console.log(item);
                    this.selectedItem = item;
                    if (value == "Delete")
                        this.deleteModal.open();
                    if (value == "RePost")
                        this.updateModal.open();
                };
                UserNeedsComponent.prototype.confirmDelete = function () {
                    var _this = this;
                    this.msnService.deleteUserServiceNeed(this.selectedItem.ID)
                        .subscribe(function (data) {
                        // set items to json response
                        _this.deleteModal.close();
                        _this.loadUserServices();
                    });
                };
                UserNeedsComponent.prototype.confirmUpdate = function () {
                    var _this = this;
                    this.msnService.putUserServiceNeed(this.selectedItem)
                        .subscribe(function (data) {
                        // set items to json response
                        _this.updateModal.close();
                        _this.loadUserServices();
                    });
                };
                UserNeedsComponent.prototype.serviceTypeChange = function (value) {
                    this.timetype = value;
                    if (value == 'oneday') {
                        this.selectedItem.servicestartdate = this.selectedItem.servicedate;
                        this.selectedItem.serviceenddate = this.selectedItem.servicedate;
                    }
                };
                UserNeedsComponent.prototype.serviceDateChange = function (object) {
                    this.selectedItem.servicestartdate = object;
                    this.selectedItem.serviceenddate = object;
                };
                return UserNeedsComponent;
            }());
            __decorate([
                core_22.ViewChild('deletemodal'),
                __metadata("design:type", ng2_bootstrap_4.ModalDirective)
            ], UserNeedsComponent.prototype, "deleteModal", void 0);
            __decorate([
                core_22.ViewChild('updatemodal'),
                __metadata("design:type", ng2_bootstrap_4.ModalDirective)
            ], UserNeedsComponent.prototype, "updateModal", void 0);
            UserNeedsComponent = __decorate([
                core_22.Component({
                    selector: 'userneeds',
                    templateUrl: 'app/core/userview/userneeds/userneeds.html',
                    styleUrls: ['app/core/userview/userneeds/userneeds.css'],
                    providers: [msn_service_12.MSNService, msn_pager_3.PagerService, msn_login_2.LoginService],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_12.MSNService, msn_login_2.LoginService, msn_pager_3.PagerService, router_13.Router, core_22.NgZone, core_23.MapsAPILoader])
            ], UserNeedsComponent);
            exports_22("UserNeedsComponent", UserNeedsComponent);
        }
    };
});
System.register("app/core/userview/postservice/address/address", ["@angular/core", "@angular/router", "angular2-google-maps/core"], function (exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var core_24, router_14, core_25, AddressComponent;
    return {
        setters: [
            function (core_24_1) {
                core_24 = core_24_1;
            },
            function (router_14_1) {
                router_14 = router_14_1;
            },
            function (core_25_1) {
                core_25 = core_25_1;
            }
        ],
        execute: function () {
            //@Injectable()
            AddressComponent = (function () {
                function AddressComponent(_router, zone, _loader) {
                    this._router = _router;
                    this.zone = zone;
                    this._loader = _loader;
                    this.serviceinfoChange = new core_24.EventEmitter();
                    //	this.serviceinfo.zoom = 15;
                    this.findCurrentLocation();
                    this.loadAutocomplete();
                }
                AddressComponent.prototype.loadAutocomplete = function () {
                    var _this = this;
                    this._loader.load().then(function () {
                        var autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"), {});
                        google.maps.event.addListener(autocomplete, 'place_changed', function () {
                            var place = autocomplete.getPlace();
                            _this.serviceinfo.latitude = place.geometry.location.lat();
                            _this.serviceinfo.longitude = place.geometry.location.lng();
                            _this.serviceinfo.zoom = 15;
                            _this.findCity();
                            _this.userAddress = "";
                        });
                    });
                };
                AddressComponent.prototype.findCurrentLocation = function () {
                    var _this = this;
                    // Try HTML5 geolocation.
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            _this.serviceinfo.latitude = position.coords.latitude;
                            _this.serviceinfo.longitude = position.coords.longitude;
                            _this.findCity();
                        }, function () {
                            //	alert('error');
                            _this.serviceinfo.latitude = 20.5937;
                            _this.serviceinfo.longitude = 78.9629;
                            _this.serviceinfo.zoom = 5;
                        });
                    }
                    else {
                        // Browser doesn't support Geolocation
                        alert('error');
                    }
                };
                AddressComponent.prototype.findCity = function () {
                    var geocoder;
                    geocoder = new google.maps.Geocoder();
                    var latlng = new google.maps.LatLng(this.serviceinfo.latitude, this.serviceinfo.longitude);
                    var _this = this;
                    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                var value = results[0].address_components;
                                console.log(value);
                                //	var value = add.split(",");
                                var count = value.length;
                                //country = value[count - 1];
                                //state = value[count - 2];
                                _this.city = value[count - 5].long_name;
                                var finaAddress;
                                value.forEach(function (addr) {
                                    if (finaAddress)
                                        finaAddress = finaAddress + '\n' + ',' + addr.long_name;
                                    else
                                        finaAddress = addr.long_name;
                                });
                                //	_this.userAddress = results[0].formatted_address;
                                _this.serviceinfo.address = "\n" + finaAddress;
                            }
                            else {
                                alert("address not found");
                            }
                        }
                        else {
                            alert("Geocoder failed due to: " + status);
                        }
                    });
                };
                AddressComponent.prototype.markerPostionChanged = function (object) {
                    this.serviceinfo.latitude = object.coords.lat;
                    this.serviceinfo.longitude = object.coords.lng;
                    this.findCity();
                };
                AddressComponent.prototype.isEmpty = function (obj) {
                    return Object.keys(obj).length === 0;
                };
                AddressComponent.prototype.addressChange = function (value) {
                    this.serviceinfoChange.emit(this.serviceinfo);
                };
                return AddressComponent;
            }());
            __decorate([
                core_24.Input(),
                __metadata("design:type", Object)
            ], AddressComponent.prototype, "serviceinfo", void 0);
            __decorate([
                core_24.Output(),
                __metadata("design:type", core_24.EventEmitter)
            ], AddressComponent.prototype, "serviceinfoChange", void 0);
            AddressComponent = __decorate([
                core_24.Component({
                    selector: 'address',
                    templateUrl: 'app/core/userview/postservice/address/address.html',
                    styleUrls: ['app/core/userview/postservice/address/address.css'],
                    providers: []
                }),
                __metadata("design:paramtypes", [router_14.Router, core_24.NgZone, core_25.MapsAPILoader])
            ], AddressComponent);
            exports_23("AddressComponent", AddressComponent);
        }
    };
});
System.register("app/core/userview/postservice/servicetime/servicetime", ["@angular/core", "@angular/router", "@angular/forms", "app/services/msn.service"], function (exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var core_26, router_15, forms_2, msn_service_13, ServiceTimeComponent;
    return {
        setters: [
            function (core_26_1) {
                core_26 = core_26_1;
            },
            function (router_15_1) {
                router_15 = router_15_1;
            },
            function (forms_2_1) {
                forms_2 = forms_2_1;
            },
            function (msn_service_13_1) {
                msn_service_13 = msn_service_13_1;
            }
        ],
        execute: function () {
            ServiceTimeComponent = (function () {
                function ServiceTimeComponent(msnService, router, route, formBuilder) {
                    this.msnService = msnService;
                    this.router = router;
                    this.route = route;
                    this.formBuilder = formBuilder;
                    this.serviceinfoChange = new core_26.EventEmitter();
                    this.calendarOptions = {
                        format: "DD-MM-YYYY",
                        firstWeekdaySunday: false,
                        minDate: new Date(),
                        //		maxDate: new DateConstructor(). ,
                        initialDate: new Date()
                    };
                }
                ServiceTimeComponent.prototype.ngOnInit = function () {
                    //this.serviceinfo.dateForm = this.formBuilder.group({
                    //	servicedate: '',
                    //	servicestartdate: '',
                    //	serviceenddate:''
                    //});
                    this.serviceinfo.service_start_time = new Date();
                    this.serviceTypeChange("oneday");
                    //	this.serviceinfo.multi_day_start_time = new Date();
                };
                ServiceTimeComponent.prototype.serviceTypeChange = function (value) {
                    this.timetype = value;
                    if (value == 'oneday') {
                        this.serviceinfo.servicestartdate = this.serviceinfo.servicedate;
                        this.serviceinfo.serviceenddate = this.serviceinfo.servicedate;
                    }
                };
                ServiceTimeComponent.prototype.serviceDateChange = function (object) {
                    this.serviceinfo.servicestartdate = object;
                    this.serviceinfo.serviceenddate = object;
                };
                return ServiceTimeComponent;
            }());
            __decorate([
                core_26.Input(),
                __metadata("design:type", Object)
            ], ServiceTimeComponent.prototype, "serviceinfo", void 0);
            __decorate([
                core_26.Output(),
                __metadata("design:type", core_26.EventEmitter)
            ], ServiceTimeComponent.prototype, "serviceinfoChange", void 0);
            ServiceTimeComponent = __decorate([
                core_26.Component({
                    selector: 'servicetime',
                    templateUrl: 'app/core/userview/postservice/servicetime/servicetime.html',
                    styleUrls: ['app/core/userview/postservice/servicetime/servicetime.css'],
                    providers: [msn_service_13.MSNService, forms_2.FormBuilder],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_13.MSNService, router_15.Router, router_15.ActivatedRoute, forms_2.FormBuilder])
            ], ServiceTimeComponent);
            exports_24("ServiceTimeComponent", ServiceTimeComponent);
        }
    };
});
System.register("app/shared/components/login/modallogin", ["@angular/core", "app/services/msn.service", "app/services/msn.login", "@angular/router", "ng2-bootstrap", "angular-google-signin"], function (exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var core_27, msn_service_14, msn_login_3, router_16, ng2_bootstrap_5, angular_google_signin_2, ModalLoginComponent;
    return {
        setters: [
            function (core_27_1) {
                core_27 = core_27_1;
            },
            function (msn_service_14_1) {
                msn_service_14 = msn_service_14_1;
            },
            function (msn_login_3_1) {
                msn_login_3 = msn_login_3_1;
            },
            function (router_16_1) {
                router_16 = router_16_1;
            },
            function (ng2_bootstrap_5_1) {
                ng2_bootstrap_5 = ng2_bootstrap_5_1;
            },
            function (angular_google_signin_2_1) {
                angular_google_signin_2 = angular_google_signin_2_1;
            }
        ],
        execute: function () {
            ModalLoginComponent = (function () {
                function ModalLoginComponent(msnService, loginService, ngZone) {
                    this.msnService = msnService;
                    this.loginService = loginService;
                    this.loginCallBack = new core_27.EventEmitter();
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
                return ModalLoginComponent;
            }());
            __decorate([
                core_27.ViewChild('myLoginModal'),
                __metadata("design:type", ng2_bootstrap_5.ModalDirective)
            ], ModalLoginComponent.prototype, "myLoginModal", void 0);
            __decorate([
                core_27.Output(),
                __metadata("design:type", core_27.EventEmitter)
            ], ModalLoginComponent.prototype, "loginCallBack", void 0);
            ModalLoginComponent = __decorate([
                core_27.Component({
                    selector: 'modallogin',
                    templateUrl: 'app/shared/components/login/modallogin.html',
                    styleUrls: ['app/shared/components/login/modallogin.css'],
                    providers: [msn_service_14.MSNService, msn_login_3.LoginService, router_16.RouterLink, angular_google_signin_2.GoogleSignInComponent]
                }),
                __metadata("design:paramtypes", [msn_service_14.MSNService, msn_login_3.LoginService, core_27.NgZone])
            ], ModalLoginComponent);
            exports_25("ModalLoginComponent", ModalLoginComponent);
        }
    };
});
System.register("app/core/userview/postservice/userverify/userverify", ["@angular/core", "@angular/router", "app/services/msn.login", "app/shared/components/login/modallogin", "app/services/msn.service"], function (exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var core_28, router_17, msn_login_4, modallogin_1, msn_service_15, UserVerifyComponent;
    return {
        setters: [
            function (core_28_1) {
                core_28 = core_28_1;
            },
            function (router_17_1) {
                router_17 = router_17_1;
            },
            function (msn_login_4_1) {
                msn_login_4 = msn_login_4_1;
            },
            function (modallogin_1_1) {
                modallogin_1 = modallogin_1_1;
            },
            function (msn_service_15_1) {
                msn_service_15 = msn_service_15_1;
            }
        ],
        execute: function () {
            UserVerifyComponent = (function () {
                function UserVerifyComponent(msnService, loginService, router, route) {
                    this.msnService = msnService;
                    this.loginService = loginService;
                    this.router = router;
                    this.route = route;
                    this.serviceinfoChange = new core_28.EventEmitter();
                    this.postUserRequest = new core_28.EventEmitter();
                    this.isOTPVerifyPhase = false;
                    this.isOTPVerifyDone = false;
                    this.isLoggedInUser = false;
                    this.isMobileVerified = false;
                    this.initialLoad();
                }
                UserVerifyComponent.prototype.ngOnInit = function () {
                };
                UserVerifyComponent.prototype.initialLoad = function () {
                    var _this = this;
                    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    this.isLoggedInUser = false;
                    if (currentUser)
                        this.loginService.loginUserInfo(currentUser).subscribe(function (user) {
                            if (user.HasRegistered) {
                                _this.isLoggedInUser = true;
                                _this.user = user;
                                _this.serviceinfo.userid = user.ID;
                                if (user.Phone != "" && user.Phone != null)
                                    _this.isMobileVerified = true;
                                console.log(user);
                            }
                        });
                };
                //titleChange(value) {
                //    this.serviceinfoChange.emit(this.serviceinfo);
                //}
                //descriptionChange(value) {
                //    this.serviceinfoChange.emit(this.serviceinfo);
                //}
                UserVerifyComponent.prototype.sendOTPClicked = function () {
                    this.isOTPVerifyPhase = true;
                    //logic for sending OTP message
                };
                UserVerifyComponent.prototype.afterVerifyOTPClick = function () {
                    this.isOTPVerifyDone = true;
                    this.isOTPVerifyPhase = false;
                    this.postUserRequest.emit(this.serviceinfo);
                };
                UserVerifyComponent.prototype.confirmRequest = function () {
                    this.postUserRequest.emit(this.serviceinfo);
                };
                UserVerifyComponent.prototype.loginOrSignupclick = function () {
                    this.myLoginModal.open();
                    //this.initialLoad();
                };
                return UserVerifyComponent;
            }());
            __decorate([
                core_28.ViewChild('modallogin'),
                __metadata("design:type", modallogin_1.ModalLoginComponent)
            ], UserVerifyComponent.prototype, "myLoginModal", void 0);
            __decorate([
                core_28.Input(),
                __metadata("design:type", Object)
            ], UserVerifyComponent.prototype, "serviceinfo", void 0);
            __decorate([
                core_28.Output(),
                __metadata("design:type", core_28.EventEmitter)
            ], UserVerifyComponent.prototype, "serviceinfoChange", void 0);
            __decorate([
                core_28.Output(),
                __metadata("design:type", core_28.EventEmitter)
            ], UserVerifyComponent.prototype, "postUserRequest", void 0);
            UserVerifyComponent = __decorate([
                core_28.Component({
                    selector: 'userverify',
                    templateUrl: 'app/core/userview/postservice/userverify/userverify.html',
                    styleUrls: ['app/core/userview/postservice/userverify/userverify.css'],
                    providers: [msn_service_15.MSNService, msn_login_4.LoginService],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_15.MSNService, msn_login_4.LoginService, router_17.Router, router_17.ActivatedRoute])
            ], UserVerifyComponent);
            exports_26("UserVerifyComponent", UserVerifyComponent);
        }
    };
});
System.register("app/shared/components/facebooklogin", ["@angular/core", "@angular/router"], function (exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var core_29, router_18, FacebookLoginComponent;
    return {
        setters: [
            function (core_29_1) {
                core_29 = core_29_1;
            },
            function (router_18_1) {
                router_18 = router_18_1;
            }
        ],
        execute: function () {
            FacebookLoginComponent = (function () {
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
                core_29.Component({
                    selector: 'facebook-login',
                    templateUrl: 'app/shared/components/facebooklogin.html',
                    //styleUrls: ['app/shared/components/facebooklogin.css'],
                    //  templateUrl: 'facebooklogin.html',
                    directives: [router_18.ROUTER_DIRECTIVES]
                }),
                __metadata("design:paramtypes", [])
            ], FacebookLoginComponent);
            exports_27("FacebookLoginComponent", FacebookLoginComponent);
        }
    };
});
System.register("app/app.depend", ["app/app.component", "app/core/header/header", "app/core/header/login/login", "app/core/topmenu/topmenu", "app/core/userview/userview", "app/core/userview/user/registeruser", "app/core/userview/user/edituser", "app/core/userview/postservice/postservice", "app/core/userview/servicesearch/servicesearch", "app/core/userview/default/default", "app/core/userview/findwork/findwork", "app/core/userview/userneeds/userneeds", "app/core/userview/findwork/listviewwork/listviewwork", "app/core/userview/findwork/mapviewwork/mapviewwork", "app/core/userview/postservice/address/address", "app/core/userview/postservice/serviceinfo/serviceinfo", "app/core/userview/postservice/servicetime/servicetime", "app/core/userview/postservice/userverify/userverify", "app/shared/directives/googleplace.directive", "app/shared/components/login/modallogin", "app/shared/components/facebooklogin", "ng2-file-upload", "angular-google-signin"], function (exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    var app_component_1, header_1, login_1, topmenu_1, userview_1, registeruser_1, edituser_1, postservice_1, servicesearch_2, default_1, findwork_1, userneeds_1, listviewwork_1, mapviewwork_1, address_1, serviceinfo_1, servicetime_1, userverify_1, googleplace_directive_1, modallogin_2, facebooklogin_1, ng2_file_upload_1, angular_google_signin_3, myComponents, myDirectives, myPipes;
    return {
        setters: [
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (topmenu_1_1) {
                topmenu_1 = topmenu_1_1;
            },
            function (userview_1_1) {
                userview_1 = userview_1_1;
            },
            function (registeruser_1_1) {
                registeruser_1 = registeruser_1_1;
            },
            function (edituser_1_1) {
                edituser_1 = edituser_1_1;
            },
            function (postservice_1_1) {
                postservice_1 = postservice_1_1;
            },
            function (servicesearch_2_1) {
                servicesearch_2 = servicesearch_2_1;
            },
            function (default_1_1) {
                default_1 = default_1_1;
            },
            function (findwork_1_1) {
                findwork_1 = findwork_1_1;
            },
            function (userneeds_1_1) {
                userneeds_1 = userneeds_1_1;
            },
            function (listviewwork_1_1) {
                listviewwork_1 = listviewwork_1_1;
            },
            function (mapviewwork_1_1) {
                mapviewwork_1 = mapviewwork_1_1;
            },
            function (address_1_1) {
                address_1 = address_1_1;
            },
            function (serviceinfo_1_1) {
                serviceinfo_1 = serviceinfo_1_1;
            },
            function (servicetime_1_1) {
                servicetime_1 = servicetime_1_1;
            },
            function (userverify_1_1) {
                userverify_1 = userverify_1_1;
            },
            function (googleplace_directive_1_1) {
                googleplace_directive_1 = googleplace_directive_1_1;
            },
            function (modallogin_2_1) {
                modallogin_2 = modallogin_2_1;
            },
            function (facebooklogin_1_1) {
                facebooklogin_1 = facebooklogin_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (angular_google_signin_3_1) {
                angular_google_signin_3 = angular_google_signin_3_1;
            }
        ],
        execute: function () {
            //import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap/components/accordion';
            exports_28("myComponents", myComponents = [
                header_1.HeaderComponent, topmenu_1.TopMenuComponent, userview_1.UserViewComponent, app_component_1.AppComponent, registeruser_1.RegisterUserComponent, edituser_1.EditUserComponent, postservice_1.PostServiceComponent, address_1.AddressComponent,
                serviceinfo_1.ServiceInfoComponent, servicetime_1.ServiceTimeComponent, userverify_1.UserVerifyComponent, facebooklogin_1.FacebookLoginComponent, angular_google_signin_3.GoogleSignInComponent,
                findwork_1.FindWorkComponent, listviewwork_1.ListViewWorkComponent, mapviewwork_1.MapViewWorkComponent, servicesearch_2.ServiceSearchComponent, default_1.DefaultViewComponent, modallogin_2.ModalLoginComponent, userneeds_1.UserNeedsComponent,
                ng2_file_upload_1.FileSelectDirective, login_1.LoginComponent
            ]);
            exports_28("myDirectives", myDirectives = [
                googleplace_directive_1.GoogleplaceDirective
            ]);
            exports_28("myPipes", myPipes = []);
        }
    };
});
System.register("app/services/provider", ["app/services/msn.service", "app/services/msn.pager", "app/services/msn.login"], function (exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    var msn_service_16, msn_pager_4, msn_login_5, APP_PROVIDERS;
    return {
        setters: [
            function (msn_service_16_1) {
                msn_service_16 = msn_service_16_1;
            },
            function (msn_pager_4_1) {
                msn_pager_4 = msn_pager_4_1;
            },
            function (msn_login_5_1) {
                msn_login_5 = msn_login_5_1;
            }
        ],
        execute: function () {
            exports_29("APP_PROVIDERS", APP_PROVIDERS = [
                msn_service_16.MSNService, msn_pager_4.PagerService, msn_login_5.LoginService
            ]);
        }
    };
});
System.register("app/services/index", ["app/services/provider"], function (exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default")
                exports[n] = m[n];
        }
        exports_30(exports);
    }
    return {
        setters: [
            function (provider_1_1) {
                exportStar_1(provider_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("app/app.routing", ["@angular/router", "app/core/userview/userneeds/userneeds", "app/core/userview/user/edituser", "app/core/userview/postservice/postservice", "app/core/userview/postservice/address/address", "app/core/userview/findwork/findwork", "app/core/userview/default/default", "app/core/userview/userview"], function (exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    var router_19, userneeds_2, edituser_2, postservice_2, address_2, findwork_2, default_2, userview_2, appRoutes, routing;
    return {
        setters: [
            function (router_19_1) {
                router_19 = router_19_1;
            },
            function (userneeds_2_1) {
                userneeds_2 = userneeds_2_1;
            },
            function (edituser_2_1) {
                edituser_2 = edituser_2_1;
            },
            function (postservice_2_1) {
                postservice_2 = postservice_2_1;
            },
            function (address_2_1) {
                address_2 = address_2_1;
            },
            function (findwork_2_1) {
                findwork_2 = findwork_2_1;
            },
            function (default_2_1) {
                default_2 = default_2_1;
            },
            function (userview_2_1) {
                userview_2 = userview_2_1;
            }
        ],
        execute: function () {
            // Route Configuration
            //export const routes: Routes = [
            //		{ path: '/manageadmins', component: AdminUserComponent }
            //];
            appRoutes = [
                {
                    path: '',
                    component: userview_2.UserViewComponent
                },
                {
                    path: ':city',
                    component: default_2.DefaultViewComponent
                },
                //{
                //    path: 'postservice/:id', component: PostServiceComponent
                //},
                {
                    path: 'postservice',
                    children: [
                        {
                            path: ':id',
                            children: [
                                {
                                    path: '',
                                    component: postservice_2.PostServiceComponent, pathMatch: 'full'
                                },
                                {
                                    path: 'address',
                                    component: address_2.AddressComponent
                                }
                            ]
                        }
                    ]
                },
                {
                    path: 'findwork/:id', component: findwork_2.FindWorkComponent
                },
                {
                    path: 'userneeds/:id',
                    component: userneeds_2.UserNeedsComponent
                },
                {
                    path: 'user/:id', component: edituser_2.EditUserComponent
                }
            ];
            exports_31("routing", routing = router_19.RouterModule.forRoot(appRoutes));
        }
    };
});
System.register("node_modules/ng2-slimscroll/src/directives/slimscroll.directive", ["@angular/core"], function (exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
    var core_30, SlimScrollOptions, SlimScrollDirective;
    return {
        setters: [
            function (core_30_1) {
                core_30 = core_30_1;
            }
        ],
        execute: function () {
            SlimScrollOptions = (function () {
                function SlimScrollOptions(obj) {
                    this.position = obj && obj.position ? obj.position : 'right';
                    this.barBackground = obj && obj.barBackground ? obj.barBackground : '#343a40';
                    this.barOpacity = obj && obj.barOpacity ? obj.barOpacity : '1';
                    this.barWidth = obj && obj.barWidth ? obj.barWidth : '12';
                    this.barBorderRadius = obj && obj.barBorderRadius ? obj.barBorderRadius : '5';
                    this.barMargin = obj && obj.barMargin ? obj.barMargin : '1px 0';
                    this.gridBackground = obj && obj.gridBackground ? obj.gridBackground : '#adb5bd';
                    this.gridOpacity = obj && obj.gridOpacity ? obj.gridOpacity : '1';
                    this.gridWidth = obj && obj.gridWidth ? obj.gridWidth : '8';
                    this.gridBorderRadius = obj && obj.gridBorderRadius ? obj.gridBorderRadius : '10';
                    this.gridMargin = obj && obj.gridMargin ? obj.gridMargin : '1px 2px';
                }
                return SlimScrollOptions;
            }());
            exports_32("SlimScrollOptions", SlimScrollOptions);
            SlimScrollDirective = (function () {
                function SlimScrollDirective(viewContainer, renderer) {
                    var _this = this;
                    this.viewContainer = viewContainer;
                    this.renderer = renderer;
                    this.onWheel = function (e) {
                        var delta = 0;
                        var target = e.target || e.srcElement;
                        if (e.wheelDelta) {
                            delta = -e.wheelDelta / 120;
                        }
                        if (e.detail) {
                            delta = e.detail / 3;
                        }
                        _this.scrollContent(delta, true, false);
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                    };
                    this.makeBarDraggable = function () {
                        var body = document.getElementsByTagName('body')[0];
                        var el = _this.el;
                        var bar = _this.bar;
                        bar.addEventListener('mousedown', function (e) {
                            if (!_this.dragging) {
                                _this.pageY = e.pageY;
                                _this.top = parseFloat(getComputedStyle(_this.bar).top);
                            }
                            _this.dragging = true;
                            _this.body.addEventListener('mousemove', _this.barDraggableListener, false);
                            _this.body.addEventListener('selectstart', _this.preventDefaultEvent, false);
                        }, false);
                        _this.body.addEventListener('mouseup', function () {
                            _this.body.removeEventListener('mousemove', _this.barDraggableListener, false);
                            _this.body.removeEventListener('selectstart', _this.preventDefaultEvent, false);
                            _this.dragging = false;
                        }, false);
                    };
                    this.preventDefaultEvent = function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                    };
                    this.barDraggableListener = function (e) {
                        var top = _this.top + e.pageY - _this.pageY;
                        _this.renderer.setElementStyle(_this.bar, 'top', top + "px");
                        _this.scrollContent(0, true, false);
                    };
                    if (typeof window === 'undefined') {
                        return;
                    }
                    this.viewContainer = viewContainer;
                    this.el = viewContainer.element.nativeElement;
                    this.body = document.documentElement.querySelector('body');
                    this.mutationThrottleTimeout = 50;
                }
                SlimScrollDirective.prototype.ngOnInit = function () {
                    var _this = this;
                    if (typeof window === 'undefined') {
                        return;
                    }
                    this.options = new SlimScrollOptions(this.options);
                    this.destroy();
                    this.setElementStyle();
                    this.wrapContainer();
                    this.initGrid();
                    this.initBar();
                    this.getBarHeight();
                    this.attachWheel(this.el);
                    this.makeBarDraggable();
                    if (MutationObserver) {
                        this.mutationObserver = new MutationObserver(function () {
                            if (_this.mutationThrottleTimeout) {
                                clearTimeout(_this.mutationThrottleTimeout);
                                _this.mutationThrottleTimeout = setTimeout(_this.onMutation.bind(_this), 50);
                            }
                        });
                        this.mutationObserver.observe(this.el, { subtree: true, childList: true });
                    }
                };
                SlimScrollDirective.prototype.setElementStyle = function () {
                    var el = this.el;
                    this.renderer.setElementStyle(el, 'overflow', 'hidden');
                    this.renderer.setElementStyle(el, 'position', 'relative');
                    this.renderer.setElementStyle(el, 'display', 'block');
                };
                SlimScrollDirective.prototype.onMutation = function () {
                    this.getBarHeight();
                };
                SlimScrollDirective.prototype.wrapContainer = function () {
                    this.wrapper = document.createElement('div');
                    var wrapper = this.wrapper;
                    var el = this.el;
                    this.renderer.setElementClass(wrapper, 'slimscroll-wrapper', true);
                    this.renderer.setElementStyle(wrapper, 'position', 'relative');
                    this.renderer.setElementStyle(wrapper, 'overflow', 'hidden');
                    this.renderer.setElementStyle(wrapper, 'display', 'block');
                    this.renderer.setElementStyle(wrapper, 'margin', getComputedStyle(el).margin);
                    this.renderer.setElementStyle(wrapper, 'width', getComputedStyle(el).width);
                    this.renderer.setElementStyle(wrapper, 'height', getComputedStyle(el).height);
                    el.parentNode.insertBefore(wrapper, el);
                    wrapper.appendChild(el);
                };
                SlimScrollDirective.prototype.initGrid = function () {
                    this.grid = document.createElement('div');
                    var grid = this.grid;
                    this.renderer.setElementClass(grid, 'slimscroll-grid', true);
                    this.renderer.setElementStyle(grid, 'position', 'absolute');
                    this.renderer.setElementStyle(grid, 'top', '0');
                    this.renderer.setElementStyle(grid, this.options.position, '0');
                    this.renderer.setElementStyle(grid, 'width', this.options.gridWidth + "px");
                    this.renderer.setElementStyle(grid, 'height', '100%');
                    this.renderer.setElementStyle(grid, 'background', this.options.gridBackground);
                    this.renderer.setElementStyle(grid, 'opacity', this.options.gridOpacity);
                    this.renderer.setElementStyle(grid, 'display', 'block');
                    this.renderer.setElementStyle(grid, 'cursor', 'pointer');
                    this.renderer.setElementStyle(grid, 'z-index', '99');
                    this.renderer.setElementStyle(grid, 'border-radius', this.options.gridBorderRadius + "px");
                    this.renderer.setElementStyle(grid, 'margin', this.options.gridMargin);
                    this.wrapper.appendChild(grid);
                };
                SlimScrollDirective.prototype.initBar = function () {
                    this.bar = document.createElement('div');
                    var bar = this.bar;
                    var el = this.el;
                    this.renderer.setElementClass(bar, 'slimscroll-bar', true);
                    this.renderer.setElementStyle(bar, 'position', 'absolute');
                    this.renderer.setElementStyle(bar, 'top', '0');
                    this.renderer.setElementStyle(bar, this.options.position, '0');
                    this.renderer.setElementStyle(bar, 'width', this.options.barWidth + "px");
                    this.renderer.setElementStyle(bar, 'background', this.options.barBackground);
                    this.renderer.setElementStyle(bar, 'opacity', this.options.barOpacity);
                    this.renderer.setElementStyle(bar, 'display', 'block');
                    this.renderer.setElementStyle(bar, 'cursor', 'pointer');
                    this.renderer.setElementStyle(bar, 'z-index', '100');
                    this.renderer.setElementStyle(bar, 'border-radius', this.options.barBorderRadius + "px");
                    this.renderer.setElementStyle(bar, 'margin', this.options.barMargin);
                    this.wrapper.appendChild(bar);
                };
                SlimScrollDirective.prototype.getBarHeight = function () {
                    var _this = this;
                    setTimeout(function () {
                        var barHeight = Math.max((_this.el.offsetHeight / _this.el.scrollHeight) * _this.el.offsetHeight, 30) + 'px';
                        var display = parseInt(barHeight, 10) === _this.el.offsetHeight ? 'none' : 'block';
                        _this.renderer.setElementStyle(_this.bar, 'height', barHeight);
                        _this.renderer.setElementStyle(_this.bar, 'display', display);
                    }, 1);
                };
                SlimScrollDirective.prototype.attachWheel = function (target) {
                    target.addEventListener('DOMMouseScroll', this.onWheel, false);
                    target.addEventListener('mousewheel', this.onWheel, false);
                };
                SlimScrollDirective.prototype.scrollContent = function (y, isWheel, isJump) {
                    var delta = y;
                    var maxTop = this.el.offsetHeight - this.bar.offsetHeight;
                    var percentScroll;
                    var barTop;
                    var bar = this.bar;
                    var el = this.el;
                    if (isWheel) {
                        delta = parseInt(getComputedStyle(bar).top, 10) + y * 20 / 100 * bar.offsetHeight;
                        delta = Math.min(Math.max(delta, 0), maxTop);
                        delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);
                        this.renderer.setElementStyle(bar, 'top', delta + 'px');
                    }
                    percentScroll = parseInt(getComputedStyle(bar).top, 10) / (el.offsetHeight - bar.offsetHeight);
                    delta = percentScroll * (el.scrollHeight - el.offsetHeight);
                    el.scrollTop = delta;
                };
                SlimScrollDirective.prototype.destroy = function () {
                    if (this.mutationObserver) {
                        this.mutationObserver.disconnect();
                        this.mutationObserver = null;
                    }
                    if (this.el.parentElement.classList.contains('slimscroll-wrapper')) {
                        var wrapper = this.el.parentElement;
                        var bar = this.el.querySelector('.slimscroll-bar');
                        this.el.removeChild(bar);
                        this.unwrap(wrapper);
                    }
                };
                SlimScrollDirective.prototype.unwrap = function (wrapper) {
                    var docFrag = document.createDocumentFragment();
                    while (wrapper.firstChild) {
                        var child = wrapper.removeChild(wrapper.firstChild);
                        docFrag.appendChild(child);
                    }
                    wrapper.parentNode.replaceChild(docFrag, wrapper);
                };
                return SlimScrollDirective;
            }());
            __decorate([
                core_30.Input(),
                __metadata("design:type", SlimScrollOptions)
            ], SlimScrollDirective.prototype, "options", void 0);
            SlimScrollDirective = __decorate([
                core_30.Directive({
                    selector: '[slimScroll]'
                }),
                __param(0, core_30.Inject(core_30.ViewContainerRef)),
                __param(1, core_30.Inject(core_30.Renderer)),
                __metadata("design:paramtypes", [core_30.ViewContainerRef,
                    core_30.Renderer])
            ], SlimScrollDirective);
            exports_32("SlimScrollDirective", SlimScrollDirective);
        }
    };
});
System.register("node_modules/ng2-slimscroll/index", ["@angular/core", "node_modules/ng2-slimscroll/src/directives/slimscroll.directive"], function (exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    var core_31, slimscroll_directive_1, SlimScrollModule;
    return {
        setters: [
            function (core_31_1) {
                core_31 = core_31_1;
            },
            function (slimscroll_directive_1_1) {
                slimscroll_directive_1 = slimscroll_directive_1_1;
                exports_33({
                    "SlimScrollOptions": slimscroll_directive_1_1["SlimScrollOptions"]
                });
            }
        ],
        execute: function () {
            SlimScrollModule = (function () {
                function SlimScrollModule() {
                }
                return SlimScrollModule;
            }());
            SlimScrollModule = __decorate([
                core_31.NgModule({
                    declarations: [
                        slimscroll_directive_1.SlimScrollDirective
                    ],
                    exports: [
                        slimscroll_directive_1.SlimScrollDirective
                    ]
                }),
                __metadata("design:paramtypes", [])
            ], SlimScrollModule);
            exports_33("SlimScrollModule", SlimScrollModule);
        }
    };
});
System.register("node_modules/ng2-slimscroll/ng2-slimscroll", ["node_modules/ng2-slimscroll/index"], function (exports_34, context_34) {
    "use strict";
    var __moduleName = context_34 && context_34.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default")
                exports[n] = m[n];
        }
        exports_34(exports);
    }
    return {
        setters: [
            function (index_1_1) {
                exportStar_2(index_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("node_modules/ng2-datepicker/src/components/ng2-datepicker.component", ["@angular/core", "@angular/forms", "moment"], function (exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    var core_32, forms_3, moment, Moment, DateModel, DatePickerOptions, CALENDAR_VALUE_ACCESSOR, DatePickerComponent;
    return {
        setters: [
            function (core_32_1) {
                core_32 = core_32_1;
            },
            function (forms_3_1) {
                forms_3 = forms_3_1;
            },
            function (moment_1) {
                moment = moment_1;
            }
        ],
        execute: function () {
            Moment = moment.default || moment;
            DateModel = (function () {
                function DateModel(obj) {
                    this.day = obj && obj.day ? obj.day : null;
                    this.month = obj && obj.month ? obj.month : null;
                    this.year = obj && obj.year ? obj.year : null;
                    this.formatted = obj && obj.formatted ? obj.formatted : null;
                    this.momentObj = obj && obj.momentObj ? obj.momentObj : null;
                }
                return DateModel;
            }());
            exports_35("DateModel", DateModel);
            DatePickerOptions = (function () {
                function DatePickerOptions(obj) {
                    this.autoApply = (obj && obj.autoApply === true) ? true : false;
                    this.style = obj && obj.style ? obj.style : 'normal';
                    this.locale = obj && obj.locale ? obj.locale : 'en';
                    this.minDate = obj && obj.minDate ? obj.minDate : null;
                    this.maxDate = obj && obj.maxDate ? obj.maxDate : null;
                    this.initialDate = obj && obj.initialDate ? obj.initialDate : null;
                    this.firstWeekdaySunday = obj && obj.firstWeekdaySunday ? obj.firstWeekdaySunday : false;
                    this.format = obj && obj.format ? obj.format : 'YYYY-MM-DD';
                }
                return DatePickerOptions;
            }());
            exports_35("DatePickerOptions", DatePickerOptions);
            exports_35("CALENDAR_VALUE_ACCESSOR", CALENDAR_VALUE_ACCESSOR = {
                provide: forms_3.NG_VALUE_ACCESSOR,
                useExisting: core_32.forwardRef(function () { return DatePickerComponent; }),
                multi: true
            });
            DatePickerComponent = (function () {
                function DatePickerComponent(el) {
                    var _this = this;
                    this.el = el;
                    this.onTouchedCallback = function () { };
                    this.onChangeCallback = function () { };
                    this.opened = false;
                    this.currentDate = Moment();
                    this.options = this.options || {};
                    this.days = [];
                    this.years = [];
                    this.date = new DateModel({
                        day: null,
                        month: null,
                        year: null,
                        formatted: null,
                        momentObj: null
                    });
                    this.generateYears();
                    this.outputEvents = new core_32.EventEmitter();
                    if (!this.inputEvents) {
                        return;
                    }
                    this.inputEvents.subscribe(function (event) {
                        if (event.type === 'setDate') {
                            _this.value = event.data;
                        }
                        else if (event.type === 'default') {
                            if (event.data === 'open') {
                                _this.open();
                            }
                            else if (event.data === 'close') {
                                _this.close();
                            }
                        }
                    });
                }
                Object.defineProperty(DatePickerComponent.prototype, "value", {
                    get: function () {
                        return this.date;
                    },
                    set: function (date) {
                        if (!date) {
                            return;
                        }
                        this.date = date;
                        this.onChangeCallback(date);
                    },
                    enumerable: true,
                    configurable: true
                });
                DatePickerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.options = new DatePickerOptions(this.options);
                    this.scrollOptions = {
                        barBackground: '#C9C9C9',
                        barWidth: '7',
                        gridBackground: '#C9C9C9',
                        gridWidth: '2'
                    };
                    if (this.options.initialDate instanceof Date) {
                        this.currentDate = Moment(this.options.initialDate);
                        this.selectDate(null, this.currentDate);
                    }
                    if (this.options.minDate instanceof Date) {
                        this.minDate = Moment(this.options.minDate);
                    }
                    else {
                        this.minDate = null;
                    }
                    if (this.options.maxDate instanceof Date) {
                        this.maxDate = Moment(this.options.maxDate);
                    }
                    else {
                        this.maxDate = null;
                    }
                    this.generateCalendar();
                    this.outputEvents.emit({ type: 'default', data: 'init' });
                    if (typeof window !== 'undefined') {
                        var body = document.querySelector('body');
                        body.addEventListener('click', function (e) {
                            if (!_this.opened || !e.target) {
                                return;
                            }
                            ;
                            if (_this.el.nativeElement !== e.target && !_this.el.nativeElement.contains(e.target)) {
                                _this.close();
                            }
                        }, false);
                    }
                    if (this.inputEvents) {
                        this.inputEvents.subscribe(function (e) {
                            if (e.type === 'action') {
                                if (e.data === 'toggle') {
                                    _this.toggle();
                                }
                                if (e.data === 'close') {
                                    _this.close();
                                }
                                if (e.data === 'open') {
                                    _this.open();
                                }
                            }
                            if (e.type === 'setDate') {
                                if (!(e.data instanceof Date)) {
                                    throw new Error("Input data must be an instance of Date!");
                                }
                                var date = Moment(e.data);
                                if (!date) {
                                    throw new Error("Invalid date: " + e.data);
                                }
                                _this.value = {
                                    day: date.format('DD'),
                                    month: date.format('MM'),
                                    year: date.format('YYYY'),
                                    formatted: date.format(_this.options.format),
                                    momentObj: date
                                };
                            }
                        });
                    }
                };
                DatePickerComponent.prototype.generateCalendar = function () {
                    var date = Moment(this.currentDate);
                    var month = date.month();
                    var year = date.year();
                    var n = 1;
                    var firstWeekDay = (this.options.firstWeekdaySunday) ? date.date(2).day() : date.date(1).day();
                    if (firstWeekDay !== 1) {
                        n -= (firstWeekDay + 6) % 7;
                    }
                    this.days = [];
                    var selectedDate = this.date.momentObj;
                    for (var i = n; i <= date.endOf('month').date(); i += 1) {
                        var currentDate = Moment(i + "." + (month + 1) + "." + year, 'DD.MM.YYYY');
                        var today = (Moment().isSame(currentDate, 'day') && Moment().isSame(currentDate, 'month')) ? true : false;
                        var selected = (selectedDate && selectedDate.isSame(currentDate, 'day')) ? true : false;
                        var betweenMinMax = true;
                        if (this.minDate !== null) {
                            if (this.maxDate !== null) {
                                betweenMinMax = currentDate.isBetween(this.minDate, this.maxDate, 'day', '[]') ? true : false;
                            }
                            else {
                                betweenMinMax = currentDate.isBefore(this.minDate, 'day') ? false : true;
                            }
                        }
                        else {
                            if (this.maxDate !== null) {
                                betweenMinMax = currentDate.isAfter(this.maxDate, 'day') ? false : true;
                            }
                        }
                        var day = {
                            day: i > 0 ? i : null,
                            month: i > 0 ? month : null,
                            year: i > 0 ? year : null,
                            enabled: i > 0 ? betweenMinMax : false,
                            today: i > 0 && today ? true : false,
                            selected: i > 0 && selected ? true : false,
                            momentObj: currentDate
                        };
                        this.days.push(day);
                    }
                };
                DatePickerComponent.prototype.selectDate = function (e, date) {
                    var _this = this;
                    if (e) {
                        e.preventDefault();
                    }
                    setTimeout(function () {
                        _this.value = {
                            day: date.format('DD'),
                            month: date.format('MM'),
                            year: date.format('YYYY'),
                            formatted: date.format(_this.options.format),
                            momentObj: date
                        };
                        _this.generateCalendar();
                        _this.outputEvents.emit({ type: 'dateChanged', data: _this.value });
                    });
                    if (this.options.autoApply === true && this.opened === true) {
                        this.opened = false;
                    }
                };
                DatePickerComponent.prototype.selectYear = function (e, year) {
                    var _this = this;
                    e.preventDefault();
                    setTimeout(function () {
                        var date = _this.currentDate.year(year);
                        _this.value = {
                            day: date.format('DD'),
                            month: date.format('MM'),
                            year: date.format('YYYY'),
                            formatted: date.format(_this.options.format),
                            momentObj: date
                        };
                        _this.yearPicker = false;
                        _this.generateCalendar();
                    });
                };
                DatePickerComponent.prototype.generateYears = function () {
                    var date = this.options.minDate || Moment().year(Moment().year() - 40);
                    var toDate = this.options.maxDate || Moment().year(Moment().year() + 40);
                    var years = toDate.year() - date.year();
                    for (var i = 0; i < years; i++) {
                        this.years.push(date.year());
                        date.add(1, 'year');
                    }
                };
                DatePickerComponent.prototype.writeValue = function (date) {
                    if (!date) {
                        return;
                    }
                    this.date = date;
                };
                DatePickerComponent.prototype.registerOnChange = function (fn) {
                    this.onChangeCallback = fn;
                };
                DatePickerComponent.prototype.registerOnTouched = function (fn) {
                    this.onTouchedCallback = fn;
                };
                DatePickerComponent.prototype.prevMonth = function () {
                    this.currentDate = this.currentDate.subtract(1, 'month');
                    this.generateCalendar();
                };
                DatePickerComponent.prototype.nextMonth = function () {
                    this.currentDate = this.currentDate.add(1, 'month');
                    this.generateCalendar();
                };
                DatePickerComponent.prototype.today = function () {
                    this.currentDate = Moment();
                    this.selectDate(null, this.currentDate);
                };
                DatePickerComponent.prototype.toggle = function () {
                    this.opened = !this.opened;
                    if (this.opened) {
                        this.onOpen();
                    }
                    this.outputEvents.emit({ type: 'default', data: 'opened' });
                };
                DatePickerComponent.prototype.open = function () {
                    this.opened = true;
                    this.onOpen();
                };
                DatePickerComponent.prototype.close = function () {
                    this.opened = false;
                    this.outputEvents.emit({ type: 'default', data: 'closed' });
                };
                DatePickerComponent.prototype.onOpen = function () {
                    this.yearPicker = false;
                };
                DatePickerComponent.prototype.openYearPicker = function () {
                    var _this = this;
                    setTimeout(function () { return _this.yearPicker = true; });
                };
                return DatePickerComponent;
            }());
            __decorate([
                core_32.Input(),
                __metadata("design:type", DatePickerOptions)
            ], DatePickerComponent.prototype, "options", void 0);
            __decorate([
                core_32.Input(),
                __metadata("design:type", core_32.EventEmitter)
            ], DatePickerComponent.prototype, "inputEvents", void 0);
            __decorate([
                core_32.Output(),
                __metadata("design:type", core_32.EventEmitter)
            ], DatePickerComponent.prototype, "outputEvents", void 0);
            DatePickerComponent = __decorate([
                core_32.Component({
                    selector: 'ng2-datepicker',
                    template: "\n  <div class=\"datepicker-container u-is-unselectable\">\n    <div class=\"datepicker-input-container\">\n      <input type=\"text\" class=\"datepicker-input\" [(ngModel)]=\"date.formatted\">\n      <div class=\"datepicker-input-icon\" (click)=\"toggle()\">\n        <i class=\"ion-ios-calendar-outline\"></i>\n      </div>\n    </div>\n    <div class=\"datepicker-calendar\" *ngIf=\"opened\">\n      <div class=\"datepicker-calendar-top\">\n        <span class=\"year-title\">{{ currentDate.format('YYYY') }}</span>\n        <button type=\"button\" (click)=\"openYearPicker()\" *ngIf=\"!yearPicker\">\n          <i class=\"ion-arrow-right-c\"></i>\n          Select Year\n        </button>\n        <i class=\"close ion-android-close\" (click)=\"close()\"></i>\n      </div>\n      <div class=\"datepicker-calendar-container\">\n        <div *ngIf=\"!yearPicker\">\n          <div class=\"datepicker-calendar-month-section\">\n            <i class=\"ion-ios-arrow-back\" (click)=\"prevMonth()\"></i>\n            <span class=\"month-title\">{{ currentDate.format('MMMM') }}</span>\n            <i class=\"ion-ios-arrow-forward\" (click)=\"nextMonth()\"></i>\n          </div>\n          <div class=\"datepicker-calendar-day-names\">\n            <span>S</span>\n            <span>M</span>\n            <span>T</span>\n            <span>W</span>\n            <span>T</span>\n            <span>F</span>\n            <span>S</span>\n          </div>\n          <div class=\"datepicker-calendar-days-container\">\n            <span class=\"day\" *ngFor=\"let d of days; let i = index\"\n                              (click)=\"selectDate($event, d.momentObj)\"\n                              [ngClass]=\"{ 'disabled': !d.enabled, 'today': d.today, 'selected': d.selected }\">\n              {{ d.day }}\n            </span>\n          </div>\n          <div class=\"datepicker-buttons\" *ngIf=\"!options.autoApply\">\n            <button type=\"button\" class=\"a-button u-is-secondary u-is-small\" (click)=\"today()\">Today</button>\n            <button type=\"button\" class=\"a-button u-is-primary u-is-small\" (click)=\"close()\">Apply</button>\n          </div>\n        </div>\n        <div *ngIf=\"yearPicker\">\n          <div class=\"datepicker-calendar-years-container\" slimScroll [options]=\"scrollOptions\">\n            <span class=\"year\" *ngFor=\"let y of years; let i = index\" (click)=\"selectYear($event, y)\">\n              {{ y }}\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
                    styles: ["\n  .datepicker-container {\n  display: inline-block;\n  position: relative; }\n  .datepicker-container .datepicker-input-container {\n    display: inline-block; }\n    .datepicker-container .datepicker-input-container .datepicker-input {\n      display: inline-block;\n      width: 160px;\n      margin-right: 15px;\n      border: none;\n      outline: none;\n      border-bottom: 1px solid #ced4da;\n      font-size: 14px;\n      color: #000000;\n      text-align: center; }\n      .datepicker-container .datepicker-input-container .datepicker-input::-webkit-input-placeholder {\n        color: #343a40; }\n      .datepicker-container .datepicker-input-container .datepicker-input::-moz-placeholder {\n        color: #343a40; }\n      .datepicker-container .datepicker-input-container .datepicker-input:-ms-input-placeholder {\n        color: #343a40; }\n      .datepicker-container .datepicker-input-container .datepicker-input:-moz-placeholder {\n        color: #343a40; }\n    .datepicker-container .datepicker-input-container .datepicker-input-icon {\n      display: inline-block; }\n      .datepicker-container .datepicker-input-container .datepicker-input-icon i {\n        font-size: 20px;\n        cursor: pointer; }\n  .datepicker-container .datepicker-calendar {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    width: 250px;\n    top: 40px;\n    position: absolute;\n    z-index: 99;\n    background: #FFFFFF;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); }\n    .datepicker-container .datepicker-calendar .datepicker-calendar-top {\n      width: 100%;\n      height: 80px;\n      background: #099268;\n      display: inline-block;\n      position: relative; }\n      .datepicker-container .datepicker-calendar .datepicker-calendar-top .year-title {\n        display: block;\n        margin-top: 12px;\n        color: #FFFFFF;\n        font-size: 28px;\n        text-align: center; }\n      .datepicker-container .datepicker-calendar .datepicker-calendar-top button {\n        width: 150px;\n        display: block;\n        margin: 0 auto;\n        color: #FFFFFF;\n        text-transform: uppercase;\n        background: transparent;\n        border: none;\n        outline: none;\n        font-size: 12px;\n        cursor: pointer; }\n      .datepicker-container .datepicker-calendar .datepicker-calendar-top .close {\n        position: absolute;\n        top: 5px;\n        right: 10px;\n        font-size: 20px;\n        color: #FFFFFF;\n        cursor: pointer; }\n    .datepicker-container .datepicker-calendar .datepicker-calendar-container {\n      display: inline-block;\n      width: 100%;\n      padding: 10px; }\n      .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-month-section {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        font-size: 14px;\n        color: #000000;\n        text-transform: uppercase; }\n        .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-month-section i {\n          cursor: pointer; }\n          .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-month-section i:first-child {\n            margin-left: 12px; }\n          .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-month-section i:last-child {\n            margin-right: 12px; }\n      .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-day-names {\n        width: 230px;\n        margin-top: 10px;\n        display: inline-block;\n        border: 1px solid transparent; }\n        .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-day-names span {\n          font-size: 12px;\n          display: block;\n          float: left;\n          width: calc(100% / 7);\n          text-align: center; }\n      .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-days-container {\n        width: 230px;\n        margin-top: 5px;\n        display: inline-block;\n        border: 1px solid transparent; }\n        .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-days-container .day {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          float: left;\n          font-size: 14px;\n          color: #000000;\n          width: calc(100% / 7);\n          height: 33px;\n          text-align: center;\n          border-radius: 50%;\n          cursor: pointer; }\n          .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-days-container .day:hover:not(.disabled), .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-days-container .day.selected {\n            background: #099268;\n            color: #FFFFFF !important; }\n          .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-days-container .day.disabled {\n            pointer-events: none; }\n          .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-days-container .day.today {\n            color: #fa5252; }\n      .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-years-container {\n        width: 100%;\n        height: 240px; }\n        .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-calendar-years-container .year {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          float: left;\n          font-size: 14px;\n          color: #000000;\n          width: calc(100% / 4);\n          height: 50px;\n          text-align: center;\n          border-radius: 50%;\n          cursor: pointer; }\n          .datepicker-container .datepicker-calendar .datepicker-calendar-container\n          .datepicker-calendar-years-container .year:hover, .datepicker-container .datepicker-calendar .datepicker-calendar-container\n          .datepicker-calendar-years-container .year.selected {\n            background: #099268;\n            color: #FFFFFF !important; }\n      .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-buttons {\n        width: 235px;\n        display: flex;\n        justify-content: center; }\n        .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-buttons button {\n          width: 100%;\n          outline: none;\n          display: inline-block;\n          border: 1px solid #099268;\n          background: #099268;\n          color: #FFFFFF;\n          margin-right: 5px;\n          border-radius: 5px;\n          cursor: pointer;\n          text-align: center;\n          padding: 5px 10px; }\n          .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-buttons button.u-is-secondary {\n            background: #FFFFFF;\n            color: #099268; }\n            .datepicker-container .datepicker-calendar .datepicker-calendar-container .datepicker-buttons button.u-is-secondary:hover {\n              color: #099268; }\n\n  "],
                    providers: [CALENDAR_VALUE_ACCESSOR]
                }),
                __param(0, core_32.Inject(core_32.ElementRef)),
                __metadata("design:paramtypes", [core_32.ElementRef])
            ], DatePickerComponent);
            exports_35("DatePickerComponent", DatePickerComponent);
        }
    };
});
System.register("node_modules/ng2-datepicker/index", ["@angular/core", "@angular/common", "@angular/forms", "node_modules/ng2-slimscroll/ng2-slimscroll", "node_modules/ng2-datepicker/src/components/ng2-datepicker.component"], function (exports_36, context_36) {
    "use strict";
    var __moduleName = context_36 && context_36.id;
    var core_33, common_1, forms_4, ng2_slimscroll_1, ng2_datepicker_component_1, DatePickerModule;
    return {
        setters: [
            function (core_33_1) {
                core_33 = core_33_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_4_1) {
                forms_4 = forms_4_1;
            },
            function (ng2_slimscroll_1_1) {
                ng2_slimscroll_1 = ng2_slimscroll_1_1;
            },
            function (ng2_datepicker_component_1_1) {
                ng2_datepicker_component_1 = ng2_datepicker_component_1_1;
                exports_36({
                    "DatePickerOptions": ng2_datepicker_component_1_1["DatePickerOptions"],
                    "DateModel": ng2_datepicker_component_1_1["DateModel"]
                });
            }
        ],
        execute: function () {
            DatePickerModule = (function () {
                function DatePickerModule() {
                }
                return DatePickerModule;
            }());
            DatePickerModule = __decorate([
                core_33.NgModule({
                    declarations: [
                        ng2_datepicker_component_1.DatePickerComponent
                    ],
                    imports: [
                        common_1.CommonModule,
                        forms_4.FormsModule,
                        ng2_slimscroll_1.SlimScrollModule
                    ],
                    exports: [
                        ng2_datepicker_component_1.DatePickerComponent,
                        ng2_slimscroll_1.SlimScrollModule
                    ]
                }),
                __metadata("design:paramtypes", [])
            ], DatePickerModule);
            exports_36("DatePickerModule", DatePickerModule);
        }
    };
});
System.register("app/app.module", ["@angular/core", "@angular/http", "@angular/platform-browser", "app/app.component", "app/app.depend", "ng2-bootstrap", "@angular/common", "@angular/router", "app/app.routing", "ag-grid-ng2/main", "ng2-dropdown", "angular2-google-maps/core", "ng2-auto-complete", "ng2-datepicker", "@angular/forms", "ng2-datetime", "ng2-cloudinary", "ng2-modal", "angular2-jwt"], function (exports_37, context_37) {
    "use strict";
    var __moduleName = context_37 && context_37.id;
    var core_34, http_3, platform_browser_1, app_component_2, app_depend_1, ng2_bootstrap_6, common_2, router_20, app_routing_1, main_1, ng2_dropdown_1, core_35, ng2_auto_complete_1, ng2_datepicker_1, forms_5, ng2_datetime_1, ng2_cloudinary_3, ng2_modal_1, angular2_jwt_1, AppModule;
    return {
        setters: [
            function (core_34_1) {
                core_34 = core_34_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_2_1) {
                app_component_2 = app_component_2_1;
            },
            function (app_depend_1_1) {
                app_depend_1 = app_depend_1_1;
            },
            function (ng2_bootstrap_6_1) {
                ng2_bootstrap_6 = ng2_bootstrap_6_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            },
            function (router_20_1) {
                router_20 = router_20_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (ng2_dropdown_1_1) {
                ng2_dropdown_1 = ng2_dropdown_1_1;
            },
            function (core_35_1) {
                core_35 = core_35_1;
            },
            function (ng2_auto_complete_1_1) {
                ng2_auto_complete_1 = ng2_auto_complete_1_1;
            },
            function (ng2_datepicker_1_1) {
                ng2_datepicker_1 = ng2_datepicker_1_1;
            },
            function (forms_5_1) {
                forms_5 = forms_5_1;
            },
            function (ng2_datetime_1_1) {
                ng2_datetime_1 = ng2_datetime_1_1;
            },
            function (ng2_cloudinary_3_1) {
                ng2_cloudinary_3 = ng2_cloudinary_3_1;
            },
            function (ng2_modal_1_1) {
                ng2_modal_1 = ng2_modal_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_34.NgModule({
                    imports: [router_20.RouterModule, platform_browser_1.BrowserModule, http_3.HttpModule, ng2_bootstrap_6.Ng2BootstrapModule, ng2_dropdown_1.DropdownModule, main_1.AgGridModule.withAotSupport(),
                        app_routing_1.routing, ng2_auto_complete_1.Ng2AutoCompleteModule, ng2_datepicker_1.DatePickerModule, forms_5.ReactiveFormsModule, ng2_datetime_1.NKDatetimeModule, ng2_cloudinary_3.Ng2CloudinaryModule, ng2_modal_1.ModalModule,
                        core_35.AgmCoreModule.forRoot({
                            apiKey: 'AIzaSyBUMARm9vJQWQy27emWKhHvqyg7_faAM9Q',
                            libraries: ['places']
                        })
                    ],
                    declarations: app_depend_1.myComponents.concat(app_depend_1.myDirectives),
                    providers: [{ provide: common_2.APP_BASE_HREF, useValue: '/' }].concat(angular2_jwt_1.AUTH_PROVIDERS),
                    bootstrap: [app_component_2.AppComponent]
                }),
                __metadata("design:paramtypes", [])
            ], AppModule);
            exports_37("AppModule", AppModule);
        }
    };
});
System.register("app/app.main", ["@angular/platform-browser-dynamic", "app/services/index", "app/app.module", "app/app.config", "rxjs/Rx"], function (exports_38, context_38) {
    "use strict";
    var __moduleName = context_38 && context_38.id;
    var platform_browser_dynamic_1, index_2, app_module_1, app_config_3, platform;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (app_config_3_1) {
                app_config_3 = app_config_3_1;
            },
            function (_4) {
            }
        ],
        execute: function () {
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(app_module_1.AppModule, index_2.APP_PROVIDERS, app_config_3.MSN_DI_CONFIG);
        }
    };
});
System.register("app/services/msn.odataservice", ["@angular/core", "rxjs/Subject", "../jaydata-model/MSN", "app/app.config", "jaydata/odata"], function (exports_39, context_39) {
    "use strict";
    var __moduleName = context_39 && context_39.id;
    var core_36, Subject_1, MSN_1, app_config_4, MSNOdataService;
    return {
        setters: [
            function (core_36_1) {
                core_36 = core_36_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (MSN_1_1) {
                MSN_1 = MSN_1_1;
            },
            function (app_config_4_1) {
                app_config_4 = app_config_4_1;
            },
            function (_5) {
            }
        ],
        execute: function () {
            MSNOdataService = (function () {
                function MSNOdataService() {
                    var _this = this;
                    this.config = {
                        provider: app_config_4.MSN_DI_CONFIG.oDataProvider,
                        oDataServiceHost: app_config_4.MSN_DI_CONFIG.oDataEndPoint
                    };
                    this.subject = new Subject_1.Subject();
                    // need to fix this
                    new MSN_1.MSN.MSNContext(this.config)
                        .onReady()
                        .then(function (context) { return _this.onReady(context); });
                }
                MSNOdataService.prototype.getContext = function (setContext) {
                    if (this.context) {
                        setContext(this.context);
                    }
                    else {
                        this.subject.subscribe(setContext);
                    }
                };
                MSNOdataService.prototype.onReady = function (context) {
                    this.context = context;
                    this.subject.next(this.context);
                    this.subject.complete();
                };
                return MSNOdataService;
            }());
            MSNOdataService = __decorate([
                core_36.Injectable(),
                __metadata("design:paramtypes", [])
            ], MSNOdataService);
            exports_39("MSNOdataService", MSNOdataService);
        }
    };
});
System.register("e2e/app.po", ["protractor"], function (exports_40, context_40) {
    "use strict";
    var __moduleName = context_40 && context_40.id;
    var protractor_1, MyserviceneedPage;
    return {
        setters: [
            function (protractor_1_1) {
                protractor_1 = protractor_1_1;
            }
        ],
        execute: function () {
            MyserviceneedPage = (function () {
                function MyserviceneedPage() {
                }
                MyserviceneedPage.prototype.navigateTo = function () {
                    return protractor_1.browser.get('/');
                };
                MyserviceneedPage.prototype.getParagraphText = function () {
                    return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
                };
                return MyserviceneedPage;
            }());
            exports_40("MyserviceneedPage", MyserviceneedPage);
        }
    };
});
System.register("e2e/app.e2e-spec", ["e2e/app.po"], function (exports_41, context_41) {
    "use strict";
    var __moduleName = context_41 && context_41.id;
    var app_po_1;
    return {
        setters: [
            function (app_po_1_1) {
                app_po_1 = app_po_1_1;
            }
        ],
        execute: function () {
            describe('myserviceneed App', function () {
                var page;
                beforeEach(function () {
                    page = new app_po_1.MyserviceneedPage();
                });
                it('should display message saying app works', function () {
                    page.navigateTo();
                    expect(page.getParagraphText()).toEqual('app works!');
                });
            });
        }
    };
});
//# sourceMappingURL=bundle.js.map