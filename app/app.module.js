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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_depend_1 = require('./app.depend');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var app_routing_1 = require('./app.routing');
var main_1 = require('ag-grid-ng2/main');
var ng2_dropdown_1 = require("ng2-dropdown");
var core_2 = require('angular2-google-maps/core');
var ng2_auto_complete_1 = require('ng2-auto-complete');
var ng2_datepicker_1 = require('ng2-datepicker');
var forms_1 = require('@angular/forms');
var ng2_datetime_1 = require('ng2-datetime');
var ng2_cloudinary_1 = require('ng2-cloudinary');
var ng2_modal_1 = require("ng2-modal");
var angular2_jwt_1 = require('angular2-jwt');
var AppModule = (function () {
    function AppModule() {
    }
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
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map