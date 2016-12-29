import { Component, ModuleWithProviders } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Routes, Router, ActivatedRoute, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';

import { MSNService } from '../../../../services/msn.service';
@Component({
    selector: 'serviceinfo',
    templateUrl: 'app/core/userview/postservice/serviceinfo/serviceinfo.html',
    styleUrls: ['app/core/userview/postservice/serviceinfo/serviceinfo.css'],
    providers: [ MSNService],
    directives: []
})
export class ServiceInfoComponent {

    serviceid: number;
    constructor(private msnService: MSNService, private router: Router, private route: ActivatedRoute) {



    }
    ngOnInit() {
        //this.route.params.subscribe(params => {
        //    if (params['id']) {
        //        this.serviceid = params['id'];
        //    }
        //});
    }

    handleClick(event) {
        this.router.navigate(['address'], { relativeTo: this.route });
        event.preventDefault();
        //this.router.navigateByUrl('postservice/' + this.serviceid+'/address');
    }
}
