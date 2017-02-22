import { Component, ViewChild, ModuleWithProviders, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Routes, Router, ActivatedRoute, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';
import {ModalDirective} from 'ng2-bootstrap';
import { LoginService } from '../../../../services/msn.login';
import {ModalLoginComponent} from '../../../../shared/components/login/modallogin';
import { MSNService } from '../../../../services/msn.service';
@Component({
    selector: 'userverify',
    templateUrl: 'app/core/userview/postservice/userverify/userverify.html',
    styleUrls: ['app/core/userview/postservice/userverify/userverify.css'],
    providers: [MSNService, LoginService],
    directives: []
})
export class UserVerifyComponent {
    //@ViewChild('myLoginModal') public myLoginModal: ModalDirective;
	 @ViewChild('modallogin') public myLoginModal: ModalLoginComponent;
    @Input() serviceinfo: any;
    @Output() serviceinfoChange: EventEmitter = new EventEmitter<any>();
    @Output() postUserRequest: EventEmitter = new EventEmitter<any>();
		isOTPVerifyPhase: boolean = false;
		isOTPVerifyDone: boolean = false;
		isLoggedInUser: boolean = false;
    serviceid: number;
		isMobileVerified: boolean = false;
		user: any;
    constructor(private msnService: MSNService, private loginService: LoginService, private router: Router, private route: ActivatedRoute) {


			this.initialLoad();
    }
    ngOnInit() {

    }

		initialLoad() {

			var currentUser = JSON.parse(localStorage.getItem('currentUser'));
			this.isLoggedInUser = false;
			if (currentUser)
        this.loginService.loginUserInfo(currentUser).subscribe(
					user=> {
						if (user.HasRegistered) {
							this.isLoggedInUser = true;
                            this.user = user;
                            this.serviceinfo.userid = user.ID;

														if (user.Phone)
															this.isMobileVerified = true;
							console.log(user);
						}
					}


					);

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

        loginOrSignupclick() {

            this.myLoginModal.open();
						//this.initialLoad();


        }

}
