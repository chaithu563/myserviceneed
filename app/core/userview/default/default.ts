import { Component, ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';
import {RegisterUserComponent} from  '../user/registeruser';

@Component({
    selector: 'userview',
    templateUrl: 'app/core/userview/default/default.html',
    styleUrls: ['app/core/userview/default/default.css'],
    providers: [],
    directives: []
})
export class DefaultViewComponent {

	
  lat: number = 20.678418;
  lng: number = 77.809007;
    constructor() {



    }

}
