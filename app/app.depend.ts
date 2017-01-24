import { AppComponent }   from './app.component';
import { HeaderComponent } from './core/header/header';
import {LoginComponent } from './core/header/login/login';
import {TopMenuComponent} from './core/topmenu/topmenu';
import {UserViewComponent} from './core/userview/userview';
import {RegisterUserComponent} from './core/userview/user/registeruser';
import {EditUserComponent} from './core/userview/user/edituser';
import {PostServiceComponent} from './core/userview/postservice/postservice';
import {ServiceSearchComponent} from './core/userview/servicesearch/servicesearch';
import {DefaultViewComponent} from './core/userview/default/default';
import {FindWorkComponent} from './core/userview/findwork/findwork';
import {ListViewWorkComponent} from './core/userview/findwork/listviewwork/listviewwork';
import {MapViewWorkComponent} from './core/userview/findwork/mapviewwork/mapviewwork';

import {AddressComponent} from './core/userview/postservice/address/address';
import {ServiceInfoComponent} from './core/userview/postservice/serviceinfo/serviceinfo';
import {ServiceTimeComponent} from './core/userview/postservice/servicetime/servicetime';
import {UserVerifyComponent} from './core/userview/postservice/userverify/userverify';
import { GoogleplaceDirective } from './shared/directives/googleplace.directive';
import { FacebookLoginComponent } from './shared/components/facebooklogin';
import { FileSelectDirective } from 'ng2-file-upload';
import {GoogleSignInComponent} from 'angular-google-signin';
//import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap/components/accordion';
export const myComponents = [
    HeaderComponent, TopMenuComponent, UserViewComponent, AppComponent, RegisterUserComponent, EditUserComponent, PostServiceComponent, AddressComponent,
    ServiceInfoComponent, ServiceTimeComponent, UserVerifyComponent, FacebookLoginComponent, GoogleSignInComponent,
    FindWorkComponent, ListViewWorkComponent, MapViewWorkComponent, ServiceSearchComponent, DefaultViewComponent,
	 FileSelectDirective, LoginComponent
];

export const myDirectives = [
    GoogleplaceDirective
];

export const myPipes = [
    
];