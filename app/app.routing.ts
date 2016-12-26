import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {RegisterUserComponent} from './core/userview/user/registeruser';
import {EditUserComponent} from './core/userview/user/edituser';
import {PostServiceComponent} from './core/userview/postservice/postservice';
import {FindWorkComponent} from './core/userview/findwork/findwork';
import {DefaultViewComponent} from './core/userview/default/default';

import {UserViewComponent} from './core/userview/userview';

// Route Configuration
//export const routes: Routes = [
//		{ path: '/manageadmins', component: AdminUserComponent }
//];

const appRoutes: Routes = [

	{
    path: '',
    component: UserViewComponent, useAsDefault: true
	},
	{
    path: ':city?',
    component: DefaultViewComponent
	},

	//{
    //path: '/',
    //component: UserViewComponent
	//},

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