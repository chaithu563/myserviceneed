import { Component, ModuleWithProviders } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Routes, Router, ActivatedRoute, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';
import {ServiceSearchComponent} from '../servicesearch/servicesearch';
import {ServiceInfoComponent} from './serviceinfo/serviceinfo';
import { MSNService } from '../../../services/msn.service';

import { postServiceRoute } from '../../../types/postServiceRoute';

import { IPostData, PostData} from '../../../types/postServiceRequest';

@Component({
	selector: 'postservice',
	templateUrl: 'app/core/userview/postservice/postservice.html',
	styleUrls: ['app/core/userview/postservice/postservice.css'],
	providers: [ServiceSearchComponent, MSNService],
	directives: []
})
export class PostServiceComponent {

	serviceObject: PostData=new PostData();
	serviceid: number;
		postServiceRoutes: any;
		curretRoute: any;
	constructor(private msnService: MSNService, private router: Router, private route: ActivatedRoute) {

		this.handleInitialLoad();

				this.router.events.subscribe(event => {
			// Handle route change
			this.handleInitialLoad();
				});
	}
	ngOnInit() {
		this.route.params.subscribe(params => {
			if (params['id']) {
			//	this.serviceid = params['id'];
				this.serviceObject.servicesubcategoryid = params['id'];
			}
		});
	}

		handleInitialLoad() {

		this.postServiceRoutes = [];
		this.postServiceRoutes = new postServiceRoute([
			{ key: "serviceinfo", value: { current: "serviceinfo", next: "address", previous: "", isActive: true } },
            { key: "address", value: { current: "address", next: "servicetime", previous: "serviceinfo", isActive: false } },
            { key: "servicetime", value: { current: "servicetime", next: "userverify", previous: "address", isActive: false } },
            { key: "userverify", value: { current: "userverify", next: "", previous: "servicetime", isActive: false } },
			//{ key: "confirm", value: { current: "confirm", next: "", previous: "address", isActive: false } }
		]).toLookup();
			
		this.displayActiveRoute();

		//this.serviceObject = [];

		}

		displayActiveRoute() {


		Object.keys(this.postServiceRoutes).forEach(key => {
			if (this.postServiceRoutes[key].isActive) {

				this.curretRoute = this.postServiceRoutes[key];
				console.log(this.curretRoute);
			}
		});


		}

		handlePrevious(event) {

		this.postServiceRoutes[this.curretRoute.current].isActive = false;
		this.postServiceRoutes[this.curretRoute.previous].isActive = true;
		this.displayActiveRoute();


	}

	handleNext(event) {

		this.postServiceRoutes[this.curretRoute.current].isActive = false;
		this.postServiceRoutes[this.curretRoute.next].isActive = true;
		this.displayActiveRoute();
        }


    postService() {

			console.log(this.serviceObject);
			let userneedOperation: Observable<any[]>;
			//this.serviceObject.address.replace('\n', '<br/>');
			userneedOperation = this.msnService.postUserServiceNeed(this.serviceObject);

			// Subscribe to observable
			userneedOperation.subscribe(
				postedneed => {
					console.log(postedneed);
					
				},
				err => {
					// Log errors if any
					console.log(err);
				});

    }
}
