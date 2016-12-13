import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {RegisterUserComponent} from './core/userview/user/registeruser';
import {EditUserComponent} from './core/userview/user/edituser';


// Route Configuration
//export const routes: Routes = [
//		{ path: '/manageadmins', component: AdminUserComponent }
//];

const appRoutes: Routes = [
  {
    path: 'registeruser',
    component: RegisterUserComponent
    },


	 {
		 path: 'user/:id', component: EditUserComponent
   
  }
   
 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);