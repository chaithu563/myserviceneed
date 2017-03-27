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
var ng2_bootstrap_1 = require('ng2-bootstrap');
var core_2 = require('angular2-google-maps/core');
var UserNeedsComponent = (function () {
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
    __decorate([
        core_1.ViewChild('deletemodal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], UserNeedsComponent.prototype, "deleteModal", void 0);
    __decorate([
        core_1.ViewChild('updatemodal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], UserNeedsComponent.prototype, "updateModal", void 0);
    UserNeedsComponent = __decorate([
        core_1.Component({
            selector: 'userneeds',
            templateUrl: 'app/core/userview/userneeds/userneeds.html',
            styleUrls: ['app/core/userview/userneeds/userneeds.css'],
            providers: [msn_service_1.MSNService, msn_pager_1.PagerService, msn_login_1.LoginService],
            directives: []
        }), 
        __metadata('design:paramtypes', [msn_service_1.MSNService, msn_login_1.LoginService, msn_pager_1.PagerService, router_1.Router, core_1.NgZone, core_2.MapsAPILoader])
    ], UserNeedsComponent);
    return UserNeedsComponent;
}());
exports.UserNeedsComponent = UserNeedsComponent;
//# sourceMappingURL=userneeds.js.map