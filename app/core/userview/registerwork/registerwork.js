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
var msn_login_1 = require('../../../services/msn.login');
var msn_service_1 = require('../../../services/msn.service');
var msn_pager_1 = require('../../../services/msn.pager');
var router_1 = require('@angular/router');
var core_2 = require('angular2-google-maps/core');
var RegisterWorkComponent = (function () {
    function RegisterWorkComponent(msnService, router, zone, _loader) {
        this.msnService = msnService;
        this.router = router;
        this.zone = zone;
        this._loader = _loader;
        this.searchString = "";
        this.avilableServices = this.msnService.getAvailableServicesURL();
        var currentUser = JSON.parse(localStorage.getItem('userDetails'));
        this.userName = currentUser.Name;
    }
    RegisterWorkComponent.prototype.serviceSelected = function (object) {
        if (object && object.NAME)
            //	this.router.navigate(['postservice', object.ID]);
            // this.router.navigateByUrl('postservice/' + object.ID);
            console.log(object);
    };
    RegisterWorkComponent = __decorate([
        core_1.Component({
            selector: 'userneeds',
            templateUrl: 'app/core/userview/registerwork/registerwork.html',
            styleUrls: ['app/core/userview/registerwork/registerwork.css'],
            providers: [msn_service_1.MSNService, msn_pager_1.PagerService, msn_login_1.LoginService],
            directives: []
        }), 
        __metadata('design:paramtypes', [msn_service_1.MSNService, router_1.Router, core_1.NgZone, core_2.MapsAPILoader])
    ], RegisterWorkComponent);
    return RegisterWorkComponent;
}());
exports.RegisterWorkComponent = RegisterWorkComponent;
//# sourceMappingURL=registerwork.js.map