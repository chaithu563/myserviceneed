System.register(["@angular/core", "../../../services/msn.service", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, msn_service_1, router_1, EditUserComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                core_1.Component({
                    selector: 'editadmin',
                    templateUrl: 'app/core/userview/user/edituser.html',
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, router_1.ActivatedRoute, router_1.Router])
            ], EditUserComponent);
            exports_1("EditUserComponent", EditUserComponent);
        }
    };
});
//# sourceMappingURL=edituser.js.map