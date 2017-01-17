System.register(["@angular/core", "../../../services/msn.service", "../../../services/msn.pager", "@angular/router", "angular2-google-maps/core"], function (exports_1, context_1) {
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
    var core_1, msn_service_1, msn_pager_1, router_1, core_2, FindWorkComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            },
            function (msn_pager_1_1) {
                msn_pager_1 = msn_pager_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            FindWorkComponent = (function () {
                //  searchUrl: string = "http://localhost/MSNServiceApi/api/FetchServices?search=:keyword";
                function FindWorkComponent(msnService, pagerService, router, zone, _loader) {
                    this.msnService = msnService;
                    this.pagerService = pagerService;
                    this.router = router;
                    this.zone = zone;
                    this._loader = _loader;
                    this.listview = false;
                    this.servicessearch = {};
                    //this.servicessearch.latitude = 16.3066;
                    //this.servicessearch.longitude = 80.43654;
                    this.avilableServices = this.msnService.getAvailableServicesURL();
                    this.findCurrentLocation();
                    this.loadAutocomplete();
                }
                FindWorkComponent.prototype.loadAutocomplete = function () {
                    var _this = this;
                    this._loader.load().then(function () {
                        var autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"), {});
                        google.maps.event.addListener(autocomplete, 'place_changed', function () {
                            var place = autocomplete.getPlace();
                            _this.servicessearch.latitude = place.geometry.location.lat();
                            _this.servicessearch.longitude = place.geometry.location.lng();
                            //	this.findCity();
                            //this.userAddress = "";
                            console.log(place);
                        });
                    });
                };
                FindWorkComponent.prototype.findCurrentLocation = function () {
                    var _this = this;
                    // Try HTML5 geolocation.
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            _this.servicessearch.latitude = position.coords.latitude;
                            _this.servicessearch.longitude = position.coords.longitude;
                            //_this.findCity();
                        }, function () {
                            alert('error');
                        });
                    }
                    else {
                        // Browser doesn't support Geolocation
                        alert('error');
                    }
                };
                FindWorkComponent.prototype.serviceSelected = function (object) {
                    if (object && object.NAME)
                        //	this.router.navigate(['postservice', object.ID]);
                        // this.router.navigateByUrl('postservice/' + object.ID);
                        console.log(object);
                };
                return FindWorkComponent;
            }());
            FindWorkComponent = __decorate([
                core_1.Component({
                    selector: 'userview',
                    templateUrl: 'app/core/userview/findwork/findwork.html',
                    styleUrls: ['app/core/userview/findwork/findwork.css'],
                    providers: [msn_service_1.MSNService, msn_pager_1.PagerService],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, msn_pager_1.PagerService, router_1.Router, core_1.NgZone, core_2.MapsAPILoader])
            ], FindWorkComponent);
            exports_1("FindWorkComponent", FindWorkComponent);
        }
    };
});
//# sourceMappingURL=findwork.js.map