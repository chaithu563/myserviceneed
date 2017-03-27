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
//import { Router, Route, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
var UserViewComponent = (function () {
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
    core_1.Component({
        selector: 'userview',
        templateUrl: 'app/core/userview/userview.html',
        styleUrls: ['app/core/userview/userview.css'],
        providers: [],
        directives: []
    }),
    __metadata("design:paramtypes", [router_1.Router])
], UserViewComponent);
exports.UserViewComponent = UserViewComponent;
//# sourceMappingURL=userview.js.map