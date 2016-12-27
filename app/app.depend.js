System.register(['./app.component', './core/header/header', './core/topmenu/topmenu', './core/userview/userview', './core/userview/user/registeruser', './core/userview/user/edituser', './core/userview/postservice/postservice', './core/userview/servicesearch/servicesearch', './core/userview/default/default', './core/userview/findwork/findwork'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, header_1, topmenu_1, userview_1, registeruser_1, edituser_1, postservice_1, servicesearch_1, default_1, findwork_1;
    var myComponents, myDirectives, myPipes;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (topmenu_1_1) {
                topmenu_1 = topmenu_1_1;
            },
            function (userview_1_1) {
                userview_1 = userview_1_1;
            },
            function (registeruser_1_1) {
                registeruser_1 = registeruser_1_1;
            },
            function (edituser_1_1) {
                edituser_1 = edituser_1_1;
            },
            function (postservice_1_1) {
                postservice_1 = postservice_1_1;
            },
            function (servicesearch_1_1) {
                servicesearch_1 = servicesearch_1_1;
            },
            function (default_1_1) {
                default_1 = default_1_1;
            },
            function (findwork_1_1) {
                findwork_1 = findwork_1_1;
            }],
        execute: function() {
            //import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap/components/accordion';
            exports_1("myComponents", myComponents = [
                header_1.HeaderComponent, topmenu_1.TopMenuComponent, userview_1.UserViewComponent, app_component_1.AppComponent, registeruser_1.RegisterUserComponent, edituser_1.EditUserComponent, postservice_1.PostServiceComponent, findwork_1.FindWorkComponent, servicesearch_1.ServiceSearchComponent, default_1.DefaultViewComponent
            ]);
            exports_1("myDirectives", myDirectives = []);
            exports_1("myPipes", myPipes = []);
        }
    }
});
//# sourceMappingURL=app.depend.js.map