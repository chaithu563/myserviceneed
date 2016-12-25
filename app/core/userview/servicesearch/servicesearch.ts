import { Component, ModuleWithProviders } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Routes, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
//import {AdminUserComponent} from './user/adminuser';
import { MSNService } from '../../../services/msn.service';

@Component({
    selector: 'servicesearch',
    templateUrl: 'app/core/userview/servicesearch/servicesearch.html',
    styleUrls: ['app/core/userview/servicesearch/servicesearch.css'],
    providers: [MSNService],
    directives: []
})
export class ServiceSearchComponent {
    subcategories: any;
    categories: any;
    cities: any;
    areas: any;
    currentcity: string;
    constructor(private msnService: MSNService) {
        //this.currentcity = 'Hyderabad';
        this.loadCities();
        this.loadCategories();
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


    private loadCategories() {
        let categoriesOperation: Observable<any[]>;


        categoriesOperation = this.msnService.getCategories();
        // Subscribe to observable
        categoriesOperation.subscribe(
            categories => {
                console.log(categories);
                this.categories = categories;
               
            },
            err => {
                // Log errors if any
                console.log(err);
            });

    }

    private onCategoryChange(value) {

        this.categories.filter(
            x => x.ID == value).map((data) => this.subcategories = data.SERVICESUBCATEGORies);

    }

    private onCityChange(value) {
        this.areas = [];
        this.cities.filter(
            x => x.ID == value.ID).map((data) => this.areas = data.CITYAREAs);

        console.log(this.areas);
    }

}
