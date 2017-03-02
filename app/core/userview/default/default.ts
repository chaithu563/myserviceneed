import { Component, ModuleWithProviders, ChangeDetectorRef } from '@angular/core';
import { MSNService } from '../../../services/msn.service';
import { Router,Route, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';
import {RegisterUserComponent} from  '../user/registeruser';
import {CloudinaryOptions, CloudinaryUploader, CloudinaryImageComponent}  from 'ng2-cloudinary';
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
    categories: any;

    cloudinaryOptions: CloudinaryOptions = new CloudinaryOptions({
        cloud_name: 'myserviceneed',
        upload_preset: 'e8pd1qgk',
        autoUpload: true,
        api_key: 375471576546793,
        api_secret: "u0oknAWF4KFEswzF-OOs_KubB30"
    });


    searchString: string;
  //  searchUrl: string = "http://localhost/MSNServiceApi/api/FetchServices?search=:keyword";
    constructor(private msnService: MSNService,private  router: Router) {

        this.searchString = "";
        this.avilableServices = this.msnService.getAvailableServicesURL();
        this.loadCategories();
    } 

     loadCategories() {

   
    // Subscribe to observable
    this.msnService.getCategories().subscribe(
        categories => {
            console.log(categories);
            this.categories = categories;
           
        },
        err => {
            // Log errors if any
            console.log(err);
        });
}
    serviceSelected(object) {
        if (object && object.NAME)
            this.router.navigate(['postservice', object.ID] );
           // this.router.navigateByUrl('postservice/' + object.ID);
        console.log(object);
    }
  

}
