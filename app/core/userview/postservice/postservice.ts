import { Component, ModuleWithProviders } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Routes, Router, ActivatedRoute , RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';
import {ServiceSearchComponent} from '../servicesearch/servicesearch';
import {ServiceInfoComponent} from './serviceinfo/serviceinfo';
import { MSNService } from '../../../services/msn.service';
@Component({
	selector: 'postservice',
	templateUrl: 'app/core/userview/postservice/postservice.html',
	styleUrls: ['app/core/userview/postservice/postservice.css'],
    providers: [ServiceSearchComponent, MSNService],
	directives: []
})
export class PostServiceComponent {

    isServiceInfo: boolean;
    isAddress: boolean;
    serviceid: number;
    constructor(private msnService: MSNService, private router: Router, private route: ActivatedRoute) {

        this.isServiceInfo = true;
        this.isAddress = false;


    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.serviceid = params['id'];
            }
        });
    }

    handleClick(event) {
        this.isServiceInfo = false;
        this.isAddress = true;
        //this.router.navigate(['address'], { relativeTo: this.route });
        //event.preventDefault();
        //this.router.navigateByUrl('postservice/' + this.serviceid+'/address');
    }
}
