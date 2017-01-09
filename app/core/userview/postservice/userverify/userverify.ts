import { Component, ModuleWithProviders, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Routes, Router, ActivatedRoute, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';

import { MSNService } from '../../../../services/msn.service';
@Component({
    selector: 'userverify',
    templateUrl: 'app/core/userview/postservice/userverify/userverify.html',
    styleUrls: ['app/core/userview/postservice/userverify/userverify.css'],
    providers: [MSNService],
    directives: []
})
export class UserVerifyComponent {

    @Input() serviceinfo: any;
    @Output() serviceinfoChange: EventEmitter = new EventEmitter<any>();
    @Output() postUserRequest: EventEmitter = new EventEmitter<any>();
		isOTPVerifyPhase: boolean = false;
		isOTPVerifyDone: boolean = false;
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

		sendOTPClicked() {
			this.isOTPVerifyPhase = true;

			//logic for sending OTP message

		}

        afterVerifyOTPClick() {
            this.isOTPVerifyDone = true;
            this.isOTPVerifyPhase = false;

            this.postUserRequest.emit(this.serviceinfo);

        }


}
