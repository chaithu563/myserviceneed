System.register(['@angular/router', './core/userview/user/registeruser', './core/userview/user/edituser', './core/userview/postservice/postservice', './core/userview/postservice/address/address', './core/userview/findwork/findwork', './core/userview/default/default', './core/userview/userview'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, registeruser_1, edituser_1, postservice_1, address_1, findwork_1, default_1, userview_1;
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
            },
            function (postservice_1_1) {
                postservice_1 = postservice_1_1;
            },
            function (address_1_1) {
                address_1 = address_1_1;
            },
            function (findwork_1_1) {
                findwork_1 = findwork_1_1;
            },
            function (default_1_1) {
                default_1 = default_1_1;
            },
            function (userview_1_1) {
                userview_1 = userview_1_1;
            }],
        execute: function() {
            // Route Configuration
            //export const routes: Routes = [
            //		{ path: '/manageadmins', component: AdminUserComponent }
            //];
            appRoutes = [
                {
                    path: '',
                    component: userview_1.UserViewComponent
                },
                {
                    path: ':city',
                    component: default_1.DefaultViewComponent
                },
                //{
                //    path: 'postservice/:id', component: PostServiceComponent
                //},
                {
                    path: 'postservice',
                    children: [
                        {
                            path: ':id',
                            children: [
                                {
                                    path: '',
                                    component: postservice_1.PostServiceComponent, pathMatch: 'full'
                                },
                                {
                                    path: 'address',
                                    component: address_1.AddressComponent
                                }
                            ]
                        }
                    ]
                },
                {
                    path: 'findwork/:id', component: findwork_1.FindWorkComponent
                },
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