import { Component, ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';
import {RegisterUserComponent} from  '../user/registeruser';

@Component({
    selector: 'userview',
    templateUrl: 'app/core/userview/default/default.html',
    styleUrls: ['app/core/userview/default/default.css'],
    providers: [RegisterUserComponent],
    directives: [RegisterUserComponent]
})
export class DefaultViewComponent {

    constructor() {



    }

}
