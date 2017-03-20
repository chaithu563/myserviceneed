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
var ng2_cloudinary_1 = require('ng2-cloudinary');
//import {AdminUserComponent}  from './user/adminuser';
var msn_service_1 = require('../../../../services/msn.service');
var ServiceInfoComponent = (function () {
    function ServiceInfoComponent(msnService, router, route) {
        this.msnService = msnService;
        this.router = router;
        this.route = route;
        this.serviceinfoChange = new core_1.EventEmitter();
        this.uploadedimages = [];
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
            var image = JSON.parse(response);
            _self.serviceinfo.uploadedimages.push(image.public_id);
            //	_self.serviceinfo.uploadedimages = _self.serviceinfo.uploadedimages.push( _self.uploadedimages);
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ServiceInfoComponent.prototype, "serviceinfo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ServiceInfoComponent.prototype, "serviceinfoChange", void 0);
    ServiceInfoComponent = __decorate([
        core_1.Component({
            selector: 'serviceinfo',
            templateUrl: 'app/core/userview/postservice/serviceinfo/serviceinfo.html',
            styleUrls: ['app/core/userview/postservice/serviceinfo/serviceinfo.css'],
            providers: [msn_service_1.MSNService],
            directives: []
        }), 
        __metadata('design:paramtypes', [msn_service_1.MSNService, router_1.Router, router_1.ActivatedRoute])
    ], ServiceInfoComponent);
    return ServiceInfoComponent;
}());
exports.ServiceInfoComponent = ServiceInfoComponent;
//# sourceMappingURL=serviceinfo.js.map