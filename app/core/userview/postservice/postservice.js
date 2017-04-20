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
//import {AdminUserComponent} from './user/adminuser';
var servicesearch_1 = require("../servicesearch/servicesearch");
var msn_service_1 = require("../../../services/msn.service");
var postServiceRoute_1 = require("../../../types/postServiceRoute");
var postServiceRequest_1 = require("../../../types/postServiceRequest");
var PostServiceComponent = (function () {
    function PostServiceComponent(msnService, router, route) {
        var _this = this;
        this.msnService = msnService;
        this.router = router;
        this.route = route;
        this.validationMessage = "";
        this.serviceObject = new postServiceRequest_1.PostData();
        this.handleInitialLoad();
        this.router.events.subscribe(function (event) {
            // Handle route change
            _this.handleInitialLoad();
        });
    }
    PostServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                //	this.serviceid = params['id'];
                _this.serviceObject.servicesubcategoryid = params['id'];
            }
        });
    };
    PostServiceComponent.prototype.handleInitialLoad = function () {
        this.postServiceRoutes = [];
        this.postServiceRoutes = new postServiceRoute_1.postServiceRoute([
            { key: "serviceinfo", value: { current: "serviceinfo", next: "address", previous: "", isActive: true } },
            { key: "address", value: { current: "address", next: "servicetime", previous: "serviceinfo", isActive: false } },
            { key: "servicetime", value: { current: "servicetime", next: "userverify", previous: "address", isActive: false } },
            { key: "userverify", value: { current: "userverify", next: "", previous: "servicetime", isActive: false } },
        ]).toLookup();
        this.displayActiveRoute();
        //this.serviceObject = [];
    };
    PostServiceComponent.prototype.displayActiveRoute = function () {
        var _this = this;
        Object.keys(this.postServiceRoutes).forEach(function (key) {
            if (_this.postServiceRoutes[key].isActive) {
                _this.curretRoute = _this.postServiceRoutes[key];
                console.log(_this.curretRoute);
            }
        });
    };
    PostServiceComponent.prototype.handlePrevious = function (event) {
        this.postServiceRoutes[this.curretRoute.current].isActive = false;
        this.postServiceRoutes[this.curretRoute.previous].isActive = true;
        this.displayActiveRoute();
    };
    PostServiceComponent.prototype.handleNext = function (event) {
        if (this.isPostInfoValid()) {
            this.postServiceRoutes[this.curretRoute.current].isActive = false;
            this.postServiceRoutes[this.curretRoute.next].isActive = true;
            this.displayActiveRoute();
        }
    };
    PostServiceComponent.prototype.isPostInfoValid = function () {
        this.validationMessage = "";
        if (this.curretRoute.current == "serviceinfo") {
            if (this.serviceObject.description == "")
                this.validationMessage = "Please provide service description.";
            if (this.serviceObject.title == "")
                this.validationMessage = "Please provide service title.";
        }
        if (this.curretRoute.current == "address") {
            if (this.serviceObject.address == "")
                this.validationMessage = "Please provide service address.";
        }
        if (this.curretRoute.current == "servicetime") {
            if (this.serviceObject.servicestartdate == "" && this.serviceObject.serviceenddate == "") {
                this.validationMessage = "Please provide Service Date Details";
            }
            if (this.serviceObject.service_start_time == null)
                this.validationMessage = "Please provide Service Time Details";
        }
        if (this.validationMessage == "")
            return true;
        else
            return false;
    };
    PostServiceComponent.prototype.postService = function () {
        var _this = this;
        console.log(this.serviceObject);
        var userneedOperation;
        //this.serviceObject.address.replace('\n', '<br/>');
        userneedOperation = this.msnService.postUserServiceNeed(this.serviceObject);
        // Subscribe to observable
        userneedOperation.subscribe(function (postedneed) {
            console.log(postedneed);
            _this.router.navigate(['/userneeds', '']);
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
    };
    return PostServiceComponent;
}());
PostServiceComponent = __decorate([
    core_1.Component({
        selector: 'postservice',
        templateUrl: 'app/core/userview/postservice/postservice.html',
        styleUrls: ['app/core/userview/postservice/postservice.css'],
        providers: [servicesearch_1.ServiceSearchComponent, msn_service_1.MSNService],
        directives: []
    }),
    __metadata("design:paramtypes", [msn_service_1.MSNService, router_1.Router, router_1.ActivatedRoute])
], PostServiceComponent);
exports.PostServiceComponent = PostServiceComponent;
//# sourceMappingURL=postservice.js.map