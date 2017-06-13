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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
//import {AdminUserComponent} from './user/adminuser';
var msn_service_1 = require('../../../../services/msn.service');
var ServiceTimeComponent = (function () {
    function ServiceTimeComponent(msnService, router, route, formBuilder) {
        this.msnService = msnService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.serviceinfoChange = new core_1.EventEmitter();
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ServiceTimeComponent.prototype, "serviceinfo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ServiceTimeComponent.prototype, "serviceinfoChange", void 0);
    ServiceTimeComponent = __decorate([
        core_1.Component({
            selector: 'servicetime',
            templateUrl: 'app/core/userview/postservice/servicetime/servicetime.html',
            styleUrls: ['app/core/userview/postservice/servicetime/servicetime.css'],
            providers: [msn_service_1.MSNService, forms_1.FormBuilder],
            directives: []
        }), 
        __metadata('design:paramtypes', [msn_service_1.MSNService, router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder])
    ], ServiceTimeComponent);
    return ServiceTimeComponent;
}());
exports.ServiceTimeComponent = ServiceTimeComponent;
//# sourceMappingURL=servicetime.js.map