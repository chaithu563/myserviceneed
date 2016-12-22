System.register(["@angular/core", "../../services/msn.service", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, msn_service_1, router_1, HeaderComponent;
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
            HeaderComponent = (function () {
                function HeaderComponent(msnService) {
                    this.msnService = msnService;
                    this.init();
                }
                HeaderComponent.prototype.init = function () {
                    this.loadCategories();
                    this.loadCities();
                };
                HeaderComponent.prototype.ngAfterViewInit = function () {
                    setTimeout(function () {
                        $('#ineed-menu').smartmenus({
                            subMenusSubOffsetX: 1,
                            subMenusSubOffsetY: -11
                        });
                    }, 500);
                    setTimeout(function () {
                        $('#findwork-menu').smartmenus({
                            subMenusSubOffsetX: 1,
                            subMenusSubOffsetY: -11
                        });
                    }, 500);
                };
                HeaderComponent.prototype.loadCategories = function () {
                    var _this = this;
                    var categoriesOperation;
                    categoriesOperation = this.msnService.getCategories();
                    // Subscribe to observable
                    categoriesOperation.subscribe(function (categories) {
                        console.log(categories);
                        _this.categories = categories;
                        _this.ngAfterViewInit();
                    }, function (err) {
                        // Log errors if any
                        console.log(err);
                    });
                };
                HeaderComponent.prototype.loadCities = function () {
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
                HeaderComponent.prototype.onCityChange = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = __decorate([
                core_1.Component({
                    selector: 'header',
                    templateUrl: 'app/core/header/header.html',
                    styleUrls: ['app/core/header/header.css'],
                    providers: [msn_service_1.MSNService, router_1.RouterLink]
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService])
            ], HeaderComponent);
            exports_1("HeaderComponent", HeaderComponent);
        }
    };
});
//# sourceMappingURL=header.js.map