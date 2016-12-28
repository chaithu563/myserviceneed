import { Component, ModuleWithProviders, ChangeDetectorRef } from '@angular/core';
import { MSNService } from '../../../services/msn.service';
import { Router,Route, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';
import {RegisterUserComponent} from  '../user/registeruser';
import { Observable } from 'rxjs/Observable';
@Component({
	selector: 'userview',
	templateUrl: 'app/core/userview/default/default.html',
	styleUrls: ['app/core/userview/default/default.css'],
    providers: [MSNService],
	directives: []
})
export class DefaultViewComponent {
    avilableServices: any;
    searchString: string;
  //  searchUrl: string = "http://localhost/MSNServiceApi/api/FetchServices?search=:keyword";
    constructor(private msnService: MSNService,private  router: Router) {

        this.searchString = "";
        this.avilableServices = this.msnService.getAvailableServicesURL();
    } 


    serviceSelected(object) {
        if (object.NAME)
            this.router.navigateByUrl('postservice/' + object.ID);
        console.log(object);
    }
  

}
