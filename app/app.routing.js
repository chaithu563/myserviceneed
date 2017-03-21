"use strict";
var router_1 = require("@angular/router");
var userneeds_1 = require("./core/userview/userneeds/userneeds");
var edituser_1 = require("./core/userview/user/edituser");
var postservice_1 = require("./core/userview/postservice/postservice");
var address_1 = require("./core/userview/postservice/address/address");
var findwork_1 = require("./core/userview/findwork/findwork");
var default_1 = require("./core/userview/default/default");
var userview_1 = require("./core/userview/userview");
// Route Configuration
//export const routes: Routes = [
//		{ path: '/manageadmins', component: AdminUserComponent }
//];
var appRoutes = [
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
        path: 'userneeds/:id',
        component: userneeds_1.UserNeedsComponent
    },
    {
        path: 'user/:id', component: edituser_1.EditUserComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map