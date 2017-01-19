System.register(["@angular/core", "rxjs/Observable", "../app.config", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/catch"], function (exports_1, context_1) {
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
    var core_1, Observable_1, app_config_1, http_1, MSNService;
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
                // Fetch all existing comments
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
                return MSNService;
            }());
            MSNService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], MSNService);
            exports_1("MSNService", MSNService);
        }
    };
});
//# sourceMappingURL=msn.service.js.map