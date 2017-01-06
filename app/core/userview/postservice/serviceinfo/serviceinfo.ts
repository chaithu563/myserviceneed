import { Component, ModuleWithProviders, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Routes, Router, ActivatedRoute, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';


import {CloudinaryOptions, CloudinaryUploader, CloudinaryImageComponent}  from 'ng2-cloudinary';
//import {AdminUserComponent}  from './user/adminuser';

import { MSNService } from '../../../../services/msn.service';
@Component({
	selector: 'serviceinfo',
	templateUrl: 'app/core/userview/postservice/serviceinfo/serviceinfo.html',
	styleUrls: ['app/core/userview/postservice/serviceinfo/serviceinfo.css'],
	providers: [MSNService],
	directives: []
})
export class ServiceInfoComponent {

	@Input() serviceinfo: any;
		@Output() serviceinfoChange: EventEmitter = new EventEmitter<any>();
		cloudinaryImage:any ;
		uploadedimages: Array<any>=[];
		cloudinaryOptions: CloudinaryOptions = new CloudinaryOptions({
			cloud_name: 'myserviceneed',
			upload_preset: 'e8pd1qgk',
			autoUpload: true,
			api_key: 375471576546793,
			api_secret: "u0oknAWF4KFEswzF-OOs_KubB30"
		});
		uploader: CloudinaryUploader = new CloudinaryUploader(this.cloudinaryOptions);

	serviceid: number;
	constructor(private msnService: MSNService, private router: Router, private route: ActivatedRoute) {


		  let _self = this;
 
    //Override onSuccessItem function to record cloudinary response data
    this.uploader.onSuccessItem = function (item: any, response: string, status: number, headers: any) {
      //response is the cloudinary response
      //see http://cloudinary.com/documentation/upload_images#upload_response
      let image = JSON.parse(response);
			_self.uploadedimages.push(image.public_id);
			_self.serviceinfo.uploadedimages = _self.uploadedimages;
      return { item, response, status, headers };
			};


	}
	ngOnInit() {

	}

		titleChange(value) {
		this.serviceinfoChange.emit(this.serviceinfo);
		}

		descriptionChange(value) {
		this.serviceinfoChange.emit(this.serviceinfo);
		}


}
