import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {RegisterUserComponent} from './core/userview/user/registeruser';
import {EditUserComponent} from './core/userview/user/edituser';
import {PostServiceComponent} from './core/userview/postservice/postservice';
import {FindWorkComponent} from './core/userview/findwork/findwork';
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
   
  },

	  {
		 path: 'postservice/:id', component: PostServiceComponent

	 },
		{
			path: 'findwork/:id', component: FindWorkComponent

		}
   
   
 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);