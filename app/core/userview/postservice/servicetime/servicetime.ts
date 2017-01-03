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
			this.dataForm = this.formBuilder.group({
				date: '',
				startdate: '',
				enddate:''
			});
		}

    //titleChange(value) {
    //    this.serviceinfoChange.emit(this.serviceinfo);
    //}

    //descriptionChange(value) {
    //    this.serviceinfoChange.emit(this.serviceinfo);
    //}


}
