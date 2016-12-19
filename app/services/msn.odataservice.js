System.register(['@angular/core', 'rxjs/Subject', '../jaydata-model/MSN', '../app.config', "jaydata/odata"], function(exports_1, context_1) {
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
    var core_1, Subject_1, MSN_1, app_config_1;
    var MSNOdataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (MSN_1_1) {
                MSN_1 = MSN_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (_1) {}],
        execute: function() {
            MSNOdataService = (function () {
                function MSNOdataService() {
                    var _this = this;
                    this.config = {
                        provider: app_config_1.MSN_DI_CONFIG.oDataProvider,
                        oDataServiceHost: app_config_1.MSN_DI_CONFIG.oDataEndPoint
                    };
                    this.subject = new Subject_1.Subject();
                    // need to fix this
                    new MSN_1.MSN.MSNContext(this.config)
                        .onReady()
                        .then(function (context) { return _this.onReady(context); });
                }
                MSNOdataService.prototype.getContext = function (setContext) {
                    if (this.context) {
                        setContext(this.context);
                    }
                    else {
                        this.subject.subscribe(setContext);
                    }
                };
                MSNOdataService.prototype.onReady = function (context) {
                    this.context = context;
                    this.subject.next(this.context);
                    this.subject.complete();
                };
                MSNOdataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MSNOdataService);
                return MSNOdataService;
            }());
            exports_1("MSNOdataService", MSNOdataService);
        }
    }
});
//# sourceMappingURL=msn.odataservice.js.map