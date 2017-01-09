System.register(["@angular/core", "@angular/router", "../../../../services/msn.service"], function (exports_1, context_1) {
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
    var core_1, router_1, msn_service_1, UserVerifyComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            }
        ],
        execute: function () {
            UserVerifyComponent = (function () {
                function UserVerifyComponent(msnService, router, route) {
                    this.msnService = msnService;
                    this.router = router;
                    this.route = route;
                    this.serviceinfoChange = new core_1.EventEmitter();
                    this.postUserRequest = new core_1.EventEmitter();
                    this.isOTPVerifyPhase = false;
                    this.isOTPVerifyDone = false;
                }
                UserVerifyComponent.prototype.ngOnInit = function () {
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
                return UserVerifyComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], UserVerifyComponent.prototype, "serviceinfo", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", core_1.EventEmitter)
            ], UserVerifyComponent.prototype, "serviceinfoChange", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", core_1.EventEmitter)
            ], UserVerifyComponent.prototype, "postUserRequest", void 0);
            UserVerifyComponent = __decorate([
                core_1.Component({
                    selector: 'userverify',
                    templateUrl: 'app/core/userview/postservice/userverify/userverify.html',
                    styleUrls: ['app/core/userview/postservice/userverify/userverify.css'],
                    providers: [msn_service_1.MSNService],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, router_1.Router, router_1.ActivatedRoute])
            ], UserVerifyComponent);
            exports_1("UserVerifyComponent", UserVerifyComponent);
        }
    };
});
//# sourceMappingURL=userverify.js.map