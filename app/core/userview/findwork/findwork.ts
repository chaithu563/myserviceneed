import { Component, ModuleWithProviders, ChangeDetectorRef, NgZone, Input, Output, EventEmitter } from '@angular/core';

import { MSNService } from '../../../services/msn.service';
import { PagerService } from '../../../services/msn.pager';
import { Router, Route, RouterModule, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import {ListViewWorkComponent} from './listviewwork/listviewwork';
import {MapViewWorkComponent} from './mapviewwork/mapviewwork';
//import {RegisterUserComponent} from  '../user/registeruser';
import { Observable } from 'rxjs/Observable';
import { AgmCoreModule, MapsAPILoader, NoOpMapsAPILoader, MouseEvent } from 'angular2-google-maps/core';
@Component({
	selector: 'findwork',
	templateUrl: 'app/core/userview/findwork/findwork.html',
	styleUrls: ['app/core/userview/findwork/findwork.css'],
	providers: [MSNService, PagerService],
	directives: []
})
export class FindWorkComponent {
	zoom: number;
	avilableServices: any;
	searchString: string;
	selectedService: any;
    listview: boolean = false;
    allupcomming: boolean = true;
	servicessearch: Observable<any>;
	datepickerneedonOpts = {
    startDate: new Date(),
    autoclose: true,
    todayBtn: 'linked',
    todayHighlight: true,
    assumeNearbyYear: true
   
	}
	datepickerbookedonOpts = {
    endDate: new Date(),
    autoclose: true,
    todayBtn: 'linked',
    todayHighlight: true,
    assumeNearbyYear: true

	}

	//  searchUrl: string = "http://localhost/MSNServiceApi/api/FetchServices?search=:keyword";
    constructor(private msnService: MSNService, private pagerService: PagerService, private router: Router, private route: ActivatedRoute, private zone: NgZone, private _loader: MapsAPILoader) {

		this.servicessearch = {};
		//this.servicessearch.latitude = 16.3066;
		//this.servicessearch.longitude = 80.43654;
				this.servicessearch.zoom = 15;
				this.servicessearch.needon = '';
				this.servicessearch.needtill = '';
				this.servicessearch.bookedon = '';
		this.avilableServices = this.msnService.getAvailableServicesURL();
		this.findCurrentLocation();
		this.loadAutocomplete();


	}

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id']) {
                //	this.serviceid = params['id'];
                this.servicessearch.serviceid = params['id'];

               
                // Subscribe to observable
                this.msnService.getServiceById(params['id']).subscribe(
                    service => {
                        console.log(service);
                        this.searchString = service.NAME;
                       
                    },
                    err => {
                        // Log errors if any
                        console.log(err);
                    });



            }
        });
    }

	loadAutocomplete() {



		this._loader.load().then(() => {
			let autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"), {});
			google.maps.event.addListener(autocomplete, 'place_changed', () => {
				let place = autocomplete.getPlace();
				this.servicessearch.latitude = place.geometry.location.lat();
				this.servicessearch.longitude = place.geometry.location.lng();
				var ne = new google.maps.LatLng(place.geometry.viewport.getNorthEast());
				var sw = new google.maps.LatLng(place.geometry.viewport.getSouthWest());
				console.log(place);
								var dim = { height: 500, width: 500 };
								this.servicessearch.zoom = this.getBoundsZoomLevel(place.geometry.viewport, dim);
								console.log('zoom' + this.servicessearch.zoom);
			});
		});

	}

	getBoundsZoomLevel(bounds, mapDim) {
    var WORLD_DIM = { height: 256, width: 256 };
    var ZOOM_MAX = 21;

    function latRad(lat) {
			var sin = Math.sin(lat * Math.PI / 180);
			var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
			return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    }

    function zoom(mapPx, worldPx, fraction) {
			return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
    }

    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();

    var latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;

    var lngDiff = ne.lng() - sw.lng();
    var lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;

    var latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
    var lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);

    return Math.min(latZoom, lngZoom, ZOOM_MAX);
	}



	findCurrentLocation() {
    var _this = this;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				_this.servicessearch.latitude = position.coords.latitude;
				_this.servicessearch.longitude = position.coords.longitude;

				//_this.findCity();

			}, function () {
			//	alert('error');

				_this.servicessearch.latitude =20.5937;
				_this.servicessearch.longitude = 78.9629;
				_this.servicessearch.zoom = 5;
			});
    } else {
			// Browser doesn't support Geolocation
			alert('error');
    }

	}

    searchServiceSelected(object) {
    if (object && object.NAME)
			this.servicessearch.serviceid = object.ID;
    console.log(object);
	}

    applyDateFilter(object) {
    if(object)
        this.allupcomming = false;
    }


	onServiceSelectedView(object) {
    //if (object && object.NAME)
    //	this.router.navigate(['postservice', object.ID]);
    // this.router.navigateByUrl('postservice/' + object.ID);
    this.selectedService = object.value;



    console.log(object);
    }

    onallupcomming(object) {
        if (this.allupcomming) {
            this.servicessearch.needon = '';
            this.servicessearch.needtill = '';
            this.servicessearch.bookedon = '';
        }
        else {
            this.servicessearch.needon = new Date();
            this.servicessearch.needtill = new Date();
            this.servicessearch.bookedon = '';
        }

    }



}
