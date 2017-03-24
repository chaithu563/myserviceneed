import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MSNService } from '../../services/msn.service';
import {servicetrunk} from './servicetrunk';
import { Observable } from 'rxjs/Observable';
import {  RouterLink} from '@angular/router';
declare var $:JQueryStatic;
@Component({
    selector: 'header',
    templateUrl: 'app/core/header/header.html',
    styleUrls: ['app/core/header/header.css'],
    providers: [MSNService, RouterLink],
     pipes: [servicetrunk]
})
export class HeaderComponent implements AfterViewInit{

	categories: any;
	cities: any;
	UserCity: string;
    constructor(private msnService: MSNService ) {

        this.init();
				this.UserCity = 'Choose City';
    }

    private init() {
       
			this.loadCategories();
			this.loadCities();


    }


		ngAfterViewInit() {
			setTimeout(() => {
				$('#ineed-menu').smartmenus({
					subMenusSubOffsetX: 1,
					subMenusSubOffsetY: -11
								});
			}, 500);

			setTimeout(() => {
				$('#findwork-menu').smartmenus({
					subMenusSubOffsetX: 1,
					subMenusSubOffsetY: -11
								});
			}, 500);



    }

		private loadCategories() {
			let categoriesOperation: Observable<any[]>;


			categoriesOperation = this.msnService.getCategories();
			// Subscribe to observable
			categoriesOperation.subscribe(
				categories => {
					console.log(categories);
					this.categories = categories;
					this.ngAfterViewInit();
				},
				err => {
					// Log errors if any
					console.log(err);
				});

		}

		private loadCities() {
			let citiesOperation: Observable<any[]>;


			citiesOperation = this.msnService.getCities();
			// Subscribe to observable
			citiesOperation.subscribe(
				cities => {
					console.log(cities);
					this.cities = cities;
				},
				err => {
					// Log errors if any
					console.log(err);
				});
		}

		private onCityChange(value) {

			this.UserCity = value;
		}
   

}
