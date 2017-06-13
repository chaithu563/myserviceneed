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
var msn_service_1 = require('../../../services/msn.service');
var router_1 = require('@angular/router');
var RegisterUserComponent = (function () {
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
    RegisterUserComponent = __decorate([
        core_1.Component({
            selector: 'registeruser',
            templateUrl: 'app/core/userview/user/registeruser.html',
        }), 
        __metadata('design:paramtypes', [msn_service_1.MSNService, router_1.Router])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());
exports.RegisterUserComponent = RegisterUserComponent;
//# sourceMappingURL=registeruser.js.map