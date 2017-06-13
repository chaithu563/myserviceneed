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
var Observable_1 = require('rxjs/Observable');
var app_config_1 = require('../app.config');
var http_1 = require('@angular/http');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var MSNService = (function () {
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
    MSNService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MSNService);
    return MSNService;
}());
exports.MSNService = MSNService;
//# sourceMappingURL=msn.service.js.map