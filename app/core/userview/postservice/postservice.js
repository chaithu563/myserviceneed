System.register(["@angular/core", "@angular/router", "../servicesearch/servicesearch", "../../../services/msn.service", "../../../types/postServiceRoute", "../../../types/postServiceRequest"], function (exports_1, context_1) {
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
    var core_1, router_1, servicesearch_1, msn_service_1, postServiceRoute_1, postServiceRequest_1, PostServiceComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (servicesearch_1_1) {
                servicesearch_1 = servicesearch_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            },
            function (postServiceRoute_1_1) {
                postServiceRoute_1 = postServiceRoute_1_1;
            },
            function (postServiceRequest_1_1) {
                postServiceRequest_1 = postServiceRequest_1_1;
            }
        ],
        execute: function () {
            PostServiceComponent = (function () {
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
            exports_1("PostServiceComponent", PostServiceComponent);
        }
    };
});
//# sourceMappingURL=postservice.js.map