import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {RegisterUserComponent} from './core/userview/user/registeruser';
import {UserNeedsComponent} from './core/userview/userneeds/userneeds';
import {EditUserComponent} from './core/userview/user/edituser';
import {PostServiceComponent} from './core/userview/postservice/postservice';
import {AddressComponent} from './core/userview/postservice/address/address';
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
        component: UserViewComponent
    },
    {
        path: ':city',
        component: DefaultViewComponent 
        //,
        //children: [
        //    { path: 'postservice/:id', component: PostServiceComponent }
           
        //]
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
                        component: PostServiceComponent, pathMatch: 'full'
                    }
                    ,
                    {
                        path: 'address',
                        component: AddressComponent
                    }
                ]


            }
        ]

    },


    {
        path: 'findwork/:id', component: FindWorkComponent

    },


    {
        path: 'userneeds/:id',
        component: UserNeedsComponent
    },


    {
        path: 'user/:id', component: EditUserComponent

    }





];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);