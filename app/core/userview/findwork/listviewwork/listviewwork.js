System.register(["@angular/core", "../../../../services/msn.service", "../../../../services/msn.pager", "@angular/router", "angular2-google-maps/core"], function (exports_1, context_1) {
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
    var core_1, msn_service_1, msn_pager_1, router_1, core_2, ListViewWorkComponent;
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
            ListViewWorkComponent = (function () {
                function ListViewWorkComponent(msnService, pagerService, router, zone, _loader) {
                    //  this.servicessearch = [];
                    //  this.avilableServices = this.msnService.getAvailableServicesURL();
                    this.msnService = msnService;
                    this.pagerService = pagerService;
                    this.router = router;
                    this.zone = zone;
                    this._loader = _loader;
                    // pager object
                    this.pager = {};
                }
                ListViewWorkComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // get dummy data
                    this.msnService.getServiceWorks()
                        .subscribe(function (data) {
                        // set items to json response
                        _this.allItems = data;
                        // initialize to page 1
                        _this.setPage(1);
                    });
                };
                ListViewWorkComponent.prototype.setPage = function (page) {
                    if (page < 1 || page > this.pager.totalPages) {
                        return;
                    }
                    // get pager object from service
                    this.pager = this.pagerService.getPager(this.allItems.length, page);
                    // get current page of items
                    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
                };
                return ListViewWorkComponent;
            }());
            ListViewWorkComponent = __decorate([
                core_1.Component({
                    selector: 'listviewwork',
                    templateUrl: 'app/core/userview/findwork/listviewwork/listviewwork.html',
                    styleUrls: ['app/core/userview/findwork/listviewwork/listviewwork.css'],
                    providers: [msn_service_1.MSNService, msn_pager_1.PagerService],
                    directives: []
                }),
                __metadata("design:paramtypes", [msn_service_1.MSNService, msn_pager_1.PagerService, router_1.Router, core_1.NgZone, core_2.MapsAPILoader])
            ], ListViewWorkComponent);
            exports_1("ListViewWorkComponent", ListViewWorkComponent);
        }
    };
});
//# sourceMappingURL=listviewwork.js.map