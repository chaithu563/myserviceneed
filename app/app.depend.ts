import { AppComponent }   from './app.component';
import { HeaderComponent } from './core/header/header';
import {TopMenuComponent} from './core/topmenu/topmenu';
import {UserViewComponent} from './core/userview/userview';
import {RegisterUserComponent} from './core/userview/user/registeruser';
import {EditUserComponent} from './core/userview/user/edituser';
import {PostServiceComponent} from './core/userview/postservice/postservice';
import {ServiceSearchComponent} from './core/userview/servicesearch/servicesearch';
import {DefaultViewComponent} from './core/userview/default/default';
import {FindWorkComponent} from './core/userview/findwork/findwork';




//import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap/components/accordion';
export const myComponents = [
	HeaderComponent, TopMenuComponent, UserViewComponent, AppComponent, RegisterUserComponent, EditUserComponent, PostServiceComponent, FindWorkComponent, ServiceSearchComponent, DefaultViewComponent
];

export const myDirectives = [
   
];

export const myPipes = [
    
];