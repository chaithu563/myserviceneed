System.register(["@angular/core", "../../../services/msn.service"], function (exports_1, context_1) {
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
    var core_1, msn_service_1, ServiceSearchComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            }
        ],
        execute: function () {
            ServiceSearchComponent = (function () {
                function ServiceSearchComponent(msnService) {
                    this.msnService = msnService;
                    //this.currentcity = 'Hyderabad';
                    this.loadCities();
                    this.loadCategories();
                }
                ServiceSearchComponent.prototype.loadCities = function () {
                    var _this = this;
                    var citiesOperation;
                    citiesOperation = this.msnService.getCities();
                    // Subscribe to observable
                    citiesOperation.subscribe(function (cities) {
                        console.log(cities);
                        _this.cities = cities;
                    }, function (err) {
                        // Log errors if any
                        console.log(err);
                    });
                };
                ServiceSearchComponent.prototype.loadCategories = function () {
                    var _this = this;
                    var categoriesOperation;
                    categoriesOperation = this.msnService.getCategories();
                    // Subscribe to observable
                    categoriesOperation.subscribe(function (categories) {
                        console.log(categories);
                        _this.categories = categories;
                    }, function (err) {
                        // Log errors if any
                        console.log(err);
                    });
                };
                ServiceSearchComponent.prototype.onCategoryChange = function (value) {
                    var _this = this;
                    this.categories.filter(function (x) { return x.ID == value; }).map(function (data) { return _this.subcategories = data.SERVICESUBCATEGORies; });
                };
                ServiceSearchComponent.prototype.onCityChange = function (value) {
                    var _this = this;
                    this.areas = [];
                    this.cities.filter(function (x) { return x.ID == value.ID; }).map(function (data) { return _this.areas = data.CITYAREAs; });
                    console.log(this.areas);
                };
                return ServiceSearchComponent;
            }());
            ServiceSearchComponent = __decorate([
                core_1.Component({
                    selector: 'servicesearch',
                    templateUrl: 'app/core/userview/servicesearch/servicesearch.html',
                    styleUrls: ['app/core/userview/servicesearch/servicesearch.css'],
                    providers: [msn_service_1.MSNService],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService])
            ], ServiceSearchComponent);
            exports_1("ServiceSearchComponent", ServiceSearchComponent);
        }
    };
});
//# sourceMappingURL=servicesearch.js.map