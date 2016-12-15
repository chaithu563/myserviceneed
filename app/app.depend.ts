import { AppComponent }   from './app.component';
import { HeaderComponent } from './core/header/header';
import {TopMenuComponent} from './core/topmenu/topmenu';
import {UserViewComponent} from './core/userview/userview';
import {RegisterUserComponent} from './core/userview/user/registeruser';
import {EditUserComponent} from './core/userview/user/edituser';



//import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap/components/accordion';
export const myComponents = [
    HeaderComponent, TopMenuComponent, UserViewComponent, AppComponent, RegisterUserComponent, EditUserComponent
];

export const myDirectives = [
   
];

export const myPipes = [
    
];