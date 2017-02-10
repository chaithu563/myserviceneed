System.register(["@angular/core", "@angular/http", "@angular/platform-browser", "./app.component", "./app.depend", "ng2-bootstrap", "@angular/common", "@angular/router", "./app.routing", "ag-grid-ng2/main", "ng2-dropdown", "angular2-google-maps/core", "ng2-auto-complete", "ng2-datepicker", "@angular/forms", "ng2-datetime", "ng2-cloudinary", "ng2-modal", "angular2-jwt"], function (exports_1, context_1) {
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
    var core_1, http_1, platform_browser_1, app_component_1, app_depend_1, ng2_bootstrap_1, common_1, router_1, app_routing_1, main_1, ng2_dropdown_1, core_2, ng2_auto_complete_1, ng2_datepicker_1, forms_1, ng2_datetime_1, ng2_cloudinary_1, ng2_modal_1, angular2_jwt_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_depend_1_1) {
                app_depend_1 = app_depend_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (ng2_dropdown_1_1) {
                ng2_dropdown_1 = ng2_dropdown_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (ng2_auto_complete_1_1) {
                ng2_auto_complete_1 = ng2_auto_complete_1_1;
            },
            function (ng2_datepicker_1_1) {
                ng2_datepicker_1 = ng2_datepicker_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (ng2_datetime_1_1) {
                ng2_datetime_1 = ng2_datetime_1_1;
            },
            function (ng2_cloudinary_1_1) {
                ng2_cloudinary_1 = ng2_cloudinary_1_1;
            },
            function (ng2_modal_1_1) {
                ng2_modal_1 = ng2_modal_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule, platform_browser_1.BrowserModule, http_1.HttpModule, ng2_bootstrap_1.Ng2BootstrapModule, ng2_dropdown_1.DropdownModule, main_1.AgGridModule.withAotSupport(),
                        app_routing_1.routing, ng2_auto_complete_1.Ng2AutoCompleteModule, ng2_datepicker_1.DatePickerModule, forms_1.ReactiveFormsModule, ng2_datetime_1.NKDatetimeModule, ng2_cloudinary_1.Ng2CloudinaryModule, ng2_modal_1.ModalModule,
                        core_2.AgmCoreModule.forRoot({
                            apiKey: 'AIzaSyBUMARm9vJQWQy27emWKhHvqyg7_faAM9Q',
                            libraries: ['places']
                        })
                    ],
                    declarations: app_depend_1.myComponents.concat(app_depend_1.myDirectives),
                    providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }].concat(angular2_jwt_1.AUTH_PROVIDERS),
                    bootstrap: [app_component_1.AppComponent]
                }),
                __metadata("design:paramtypes", [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map