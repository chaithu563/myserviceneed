import { Component, ModuleWithProviders, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Routes, Router, ActivatedRoute, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';

import { MSNService } from '../../../../services/msn.service';
@Component({
    selector: 'servicetime',
    templateUrl: 'app/core/userview/postservice/servicetime/servicetime.html',
    styleUrls: ['app/core/userview/postservice/servicetime/servicetime.css'],
    providers: [MSNService],
    directives: []
})
export class ServiceTimeComponent {

    @Input() serviceinfo: any;
    @Output() serviceinfoChange: EventEmitter = new EventEmitter<any>();

    serviceid: number;
    constructor(private msnService: MSNService, private router: Router, private route: ActivatedRoute) {



    }
    ngOnInit() {

    }

    //titleChange(value) {
    //    this.serviceinfoChange.emit(this.serviceinfo);
    //}

    //descriptionChange(value) {
    //    this.serviceinfoChange.emit(this.serviceinfo);
    //}


}
