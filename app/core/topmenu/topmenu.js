System.register(["@angular/core", "ng2-bootstrap", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, ng2_bootstrap_1, router_1, TopMenuComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            TopMenuComponent = (function () {
                function TopMenuComponent(router) {
                    this.router = router;
                }
                return TopMenuComponent;
            }());
            TopMenuComponent = __decorate([
                core_1.Component({
                    selector: 'leftmenu',
                    templateUrl: 'app/core/topmenu/topmenu.html',
                    styleUrls: ['app/core/topmenu/topmenu.css'],
                    providers: [ng2_bootstrap_1.AccordionComponent, ng2_bootstrap_1.AccordionPanelComponent],
                    directives: [router_1.ROUTER_DIRECTIVES]
                }),
                __metadata("design:paramtypes", [router_1.Router])
            ], TopMenuComponent);
            exports_1("TopMenuComponent", TopMenuComponent);
        }
    };
});
//# sourceMappingURL=topmenu.js.map