System.register(['@angular/router', './core/userview/user/registeruser', './core/userview/user/edituser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, registeruser_1, edituser_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (registeruser_1_1) {
                registeruser_1 = registeruser_1_1;
            },
            function (edituser_1_1) {
                edituser_1 = edituser_1_1;
            }],
        execute: function() {
            // Route Configuration
            //export const routes: Routes = [
            //		{ path: '/manageadmins', component: AdminUserComponent }
            //];
            appRoutes = [
                {
                    path: 'registeruser',
                    component: registeruser_1.RegisterUserComponent
                },
                {
                    path: 'user/:id', component: edituser_1.EditUserComponent
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map