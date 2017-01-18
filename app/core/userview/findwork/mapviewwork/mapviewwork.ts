import { Component, OnInit, ModuleWithProviders, NgZone, Input, Output, EventEmitter} from '@angular/core';
import { Routes, Router, RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
import { Injectable } from '@angular/core';
import {GoogleplaceDirective} from '../../../../shared/directives/googleplace.directive';
import { AgmCoreModule, MapsAPILoader, NoOpMapsAPILoader, MouseEvent } from 'angular2-google-maps/core';
import { MSNService } from '../../../../services/msn.service';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'mapviewwork',
    templateUrl: 'app/core/userview/findwork/mapviewwork/mapviewwork.html',
    styleUrls: ['app/core/userview/findwork/mapviewwork/mapviewwork.css'],
    providers: []
		//outputs: ['onServiceSelected']
})



//@Injectable()
export class MapViewWorkComponent implements OnInit{

	@Input() servicessearch: Observable<any>;
    @Output() onServiceSelected=  new EventEmitter();
    userAddress: Object;
    public address: Object;
    // array of all items to be paged
    private allItems: any[];
    geocoder: any;
    google: any;
    //lat: number;
    //lng: number;
    city: string;
    constructor(private msnService: MSNService,public _router: Router, private zone: NgZone, private _loader: MapsAPILoader) {

    //    this.findCurrentLocation();
      //  this.loadAutocomplete()

    }

    ngOnInit() {
        // get dummy data
        this.msnService.getServiceWorks()
            // .map((response) => response)
            .subscribe(data => {
                // set items to json response
                this.allItems = data;

              
            });
    }
    


    selectedService(selectedService) {

       // this.selectedService. = selectedService;
        this.onServiceSelected.emit({
            value: selectedService
        })

    }

    


   

   
  

			

}
