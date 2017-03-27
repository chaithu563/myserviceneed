"use strict";
var app_component_1 = require('./app.component');
var header_1 = require('./core/header/header');
var servicetrunk_1 = require('./core/header/servicetrunk');
var login_1 = require('./core/header/login/login');
var topmenu_1 = require('./core/topmenu/topmenu');
var userview_1 = require('./core/userview/userview');
var registeruser_1 = require('./core/userview/user/registeruser');
var edituser_1 = require('./core/userview/user/edituser');
var postservice_1 = require('./core/userview/postservice/postservice');
var servicesearch_1 = require('./core/userview/servicesearch/servicesearch');
var default_1 = require('./core/userview/default/default');
var findwork_1 = require('./core/userview/findwork/findwork');
var userneeds_1 = require('./core/userview/userneeds/userneeds');
var listviewwork_1 = require('./core/userview/findwork/listviewwork/listviewwork');
var mapviewwork_1 = require('./core/userview/findwork/mapviewwork/mapviewwork');
var address_1 = require('./core/userview/postservice/address/address');
var serviceinfo_1 = require('./core/userview/postservice/serviceinfo/serviceinfo');
var servicetime_1 = require('./core/userview/postservice/servicetime/servicetime');
var userverify_1 = require('./core/userview/postservice/userverify/userverify');
var googleplace_directive_1 = require('./shared/directives/googleplace.directive');
var modallogin_1 = require('./shared/components/login/modallogin');
var facebooklogin_1 = require('./shared/components/facebooklogin');
var ng2_file_upload_1 = require('ng2-file-upload');
var angular_google_signin_1 = require('angular-google-signin');
//import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap/components/accordion';
exports.myComponents = [
    header_1.HeaderComponent, servicetrunk_1.servicetrunk, topmenu_1.TopMenuComponent, userview_1.UserViewComponent, app_component_1.AppComponent, registeruser_1.RegisterUserComponent, edituser_1.EditUserComponent, postservice_1.PostServiceComponent, address_1.AddressComponent,
    serviceinfo_1.ServiceInfoComponent, servicetime_1.ServiceTimeComponent, userverify_1.UserVerifyComponent, facebooklogin_1.FacebookLoginComponent, angular_google_signin_1.GoogleSignInComponent,
    findwork_1.FindWorkComponent, listviewwork_1.ListViewWorkComponent, mapviewwork_1.MapViewWorkComponent, servicesearch_1.ServiceSearchComponent, default_1.DefaultViewComponent, modallogin_1.ModalLoginComponent, userneeds_1.UserNeedsComponent,
    ng2_file_upload_1.FileSelectDirective, login_1.LoginComponent
];
exports.myDirectives = [
    googleplace_directive_1.GoogleplaceDirective
];
exports.myPipes = [];
//# sourceMappingURL=app.depend.js.map