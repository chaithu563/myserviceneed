System.register(["@angular/core", "@angular/router", "angular2-google-maps/core", "../../../../services/msn.service", "rxjs/Observable"], function (exports_1, context_1) {
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
    var core_1, router_1, core_2, msn_service_1, Observable_1, MapViewWorkComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            //@Injectable()
            MapViewWorkComponent = (function () {
                function MapViewWorkComponent(msnService, _router, zone, _loader, differs) {
                    this.msnService = msnService;
                    this._router = _router;
                    this.zone = zone;
                    this._loader = _loader;
                    this.differs = differs;
                    this.onServiceSelected = new core_1.EventEmitter();
                    this.differ = differs.find({}).create(null);
                    //    this.findCurrentLocation();
                    //  this.loadAutocomplete()
                }
                MapViewWorkComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // get dummy data
                    this.msnService.getServiceWorks(this.servicessearch)
                        .subscribe(function (data) {
                        // set items to json response
                        _this.allItems = data;
                    });
                };
                MapViewWorkComponent.prototype.ngDoCheck = function () {
                    var changes = this.differ.diff(this.servicessearch);
                    if (changes) {
                        console.log('changes detected' + changes);
                        this.ngOnInit();
                    }
                    else {
                        console.log('nothing changed');
                    }
                };
                MapViewWorkComponent.prototype.selectedService = function (selectedService) {
                    // this.selectedService. = selectedService;
                    this.onServiceSelected.emit({
                        value: selectedService
                    });
                };
                return MapViewWorkComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Observable_1.Observable)
            ], MapViewWorkComponent.prototype, "servicessearch", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], MapViewWorkComponent.prototype, "onServiceSelected", void 0);
            MapViewWorkComponent = __decorate([
                core_1.Component({
                    selector: 'mapviewwork',
                    templateUrl: 'app/core/userview/findwork/mapviewwork/mapviewwork.html',
                    styleUrls: ['app/core/userview/findwork/mapviewwork/mapviewwork.css'],
                    providers: []
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, router_1.Router, core_1.NgZone, core_2.MapsAPILoader, core_1.KeyValueDiffers])
            ], MapViewWorkComponent);
            exports_1("MapViewWorkComponent", MapViewWorkComponent);
        }
    };
});
//# sourceMappingURL=mapviewwork.js.map