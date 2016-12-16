System.register(['@angular/core', '@angular/platform-browser', './app.component', './app.depend', 'ng2-bootstrap', '@angular/common', '@angular/router', './app.routing', 'ag-grid-ng2/main', "ng2-dropdown"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_component_1, app_depend_1, ng2_bootstrap_1, common_1, router_1, app_routing_1, main_1, ng2_dropdown_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [router_1.RouterModule, platform_browser_1.BrowserModule, ng2_bootstrap_1.Ng2BootstrapModule, ng2_dropdown_1.DropdownModule, main_1.AgGridModule.withAotSupport(), app_routing_1.routing],
                        declarations: app_depend_1.myComponents.slice(),
                        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map