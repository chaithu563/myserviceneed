System.register(["@angular/core", "@angular/router", "ng2-cloudinary", "../../../../services/msn.service"], function (exports_1, context_1) {
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
    var core_1, router_1, ng2_cloudinary_1, msn_service_1, ServiceInfoComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_cloudinary_1_1) {
                ng2_cloudinary_1 = ng2_cloudinary_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            }
        ],
        execute: function () {
            ServiceInfoComponent = (function () {
                function ServiceInfoComponent(msnService, router, route) {
                    this.msnService = msnService;
                    this.router = router;
                    this.route = route;
                    this.serviceinfoChange = new core_1.EventEmitter();
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
                        _self.cloudinaryImage = JSON.parse(response);
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
                core_1.Input(),
                __metadata("design:type", Object)
            ], ServiceInfoComponent.prototype, "serviceinfo", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", core_1.EventEmitter)
            ], ServiceInfoComponent.prototype, "serviceinfoChange", void 0);
            ServiceInfoComponent = __decorate([
                core_1.Component({
                    selector: 'serviceinfo',
                    templateUrl: 'app/core/userview/postservice/serviceinfo/serviceinfo.html',
                    styleUrls: ['app/core/userview/postservice/serviceinfo/serviceinfo.css'],
                    providers: [msn_service_1.MSNService],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, router_1.Router, router_1.ActivatedRoute])
            ], ServiceInfoComponent);
            exports_1("ServiceInfoComponent", ServiceInfoComponent);
        }
    };
});
//# sourceMappingURL=serviceinfo.js.map