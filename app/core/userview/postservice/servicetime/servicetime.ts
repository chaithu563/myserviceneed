import { Component, ModuleWithProviders, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Routes, Router, ActivatedRoute, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
//import {AdminUserComponent} from './user/adminuser';

import { MSNService } from '../../../../services/msn.service';
@Component({
    selector: 'servicetime',
    templateUrl: 'app/core/userview/postservice/servicetime/servicetime.html',
    styleUrls: ['app/core/userview/postservice/servicetime/servicetime.css'],
    providers: [MSNService, FormBuilder],
    directives: []
})
export class ServiceTimeComponent implements OnInit {

    @Input() serviceinfo: any;
    @Output() serviceinfoChange: EventEmitter = new EventEmitter<any>();
		dataForm: FormGroup;
        timetype: string;
        service_start_time: Date;
			//	multi_day_start_time: Date;
    serviceid: number;
		calendarOptions = {
			format: "DD-MM-YYYY",
			firstWeekdaySunday: false,
			minDate: new Date(),
	//		maxDate: new DateConstructor(). ,
			initialDate: new Date()

		};

	
    constructor(private msnService: MSNService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {

		

    }
    ngOnInit() {
			//this.serviceinfo.dateForm = this.formBuilder.group({
			//	servicedate: '',
			//	servicestartdate: '',
			//	serviceenddate:''
			//});

			this.serviceinfo.service_start_time = new Date();
		//	this.serviceinfo.multi_day_start_time = new Date();
		}

		serviceTypeChange(value) {

			this.timetype = value;

			if (value == 'oneday') {

				this.serviceinfo.servicestartdate = this.serviceinfo.servicedate;
				this.serviceinfo.serviceenddate = this.serviceinfo.servicedate;

			}

    }
        serviceDateChange(object) {
            this.serviceinfo.servicestartdate = object;
            this.serviceinfo.serviceenddate = object;

        }


}
