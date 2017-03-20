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
var core_2 = require('@angular/core');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var router_1 = require('@angular/router');
var ng2_cloudinary_1 = require('ng2-cloudinary');
var DefaultViewComponent = (function () {
    //  searchUrl: string = "http://localhost/MSNServiceApi/api/FetchServices?search=:keyword";
    function DefaultViewComponent(msnService, router) {
        this.msnService = msnService;
        this.router = router;
        this.cloudinaryOptions = new ng2_cloudinary_1.CloudinaryOptions({
            cloud_name: 'myserviceneed',
            upload_preset: 'e8pd1qgk',
            autoUpload: true,
            api_key: 375471576546793,
            api_secret: "u0oknAWF4KFEswzF-OOs_KubB30"
        });
        this.searchString = "";
        this.avilableServices = this.msnService.getAvailableServicesURL();
        this.loadCategories();
    }
    DefaultViewComponent.prototype.loadCategories = function () {
        var _this = this;
        // Subscribe to observable
        this.msnService.getCategories().subscribe(function (categories) {
            console.log(categories);
            _this.categories = categories;
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    DefaultViewComponent.prototype.serviceSelected = function (object) {
        if (object && object.NAME)
            this.router.navigate(['postservice', object.ID]);
        // this.router.navigateByUrl('postservice/' + object.ID);
        console.log(object);
    };
    DefaultViewComponent.prototype.viewAll = function (data) {
        console.log(data);
        this.selectedAllServices = data;
        this.allServicesModal.open();
    };
    __decorate([
        core_2.ViewChild('allServicesModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], DefaultViewComponent.prototype, "allServicesModal", void 0);
    DefaultViewComponent = __decorate([
        core_1.Component({
            selector: 'userview',
            templateUrl: 'app/core/userview/default/default.html',
            styleUrls: ['app/core/userview/default/default.css'],
            providers: [msn_service_1.MSNService, router_1.RouterLink],
            directives: []
        }), 
        __metadata('design:paramtypes', [msn_service_1.MSNService, router_1.Router])
    ], DefaultViewComponent);
    return DefaultViewComponent;
}());
exports.DefaultViewComponent = DefaultViewComponent;
//# sourceMappingURL=default.js.map