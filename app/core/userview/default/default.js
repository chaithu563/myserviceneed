System.register(['@angular/core', '../../../services/msn.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, msn_service_1;
    var DefaultViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (msn_service_1_1) {
                msn_service_1 = msn_service_1_1;
            }],
        execute: function() {
            DefaultViewComponent = (function () {
                //  searchUrl: string = "http://localhost/MSNServiceApi/api/FetchServices?search=:keyword";
                function DefaultViewComponent(msnService, _cdRef) {
                    this.msnService = msnService;
                    this._cdRef = _cdRef;
                    this.searchString = "";
                    this.avilableServices = this.msnService.getAvailableServicesURL();
                }
                DefaultViewComponent = __decorate([
                    core_1.Component({
                        selector: 'userview',
                        templateUrl: 'app/core/userview/default/default.html',
                        styleUrls: ['app/core/userview/default/default.css'],
                        providers: [msn_service_1.MSNService],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [msn_service_1.MSNService, core_1.ChangeDetectorRef])
                ], DefaultViewComponent);
                return DefaultViewComponent;
            }());
            exports_1("DefaultViewComponent", DefaultViewComponent);
        }
    }
});
//# sourceMappingURL=default.js.map