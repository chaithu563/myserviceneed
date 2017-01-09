import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {MSN_DI_CONFIG } from '../app.config';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MSNService {

    private config = {

              ServiceApi: MSN_DI_CONFIG.MSNServiceApi
    };

    constructor( private http: Http) {
       
    }

    // Fetch all existing comments
   public getCategories(): Observable<any[]> {

        // ...using get request
        return this.http.get(this.config.ServiceApi +'SERVICECATEGORies')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
   // Fetch all existing comments
   public getAvailableServicesURL() {


       return this.config.ServiceApi + 'FetchServices?search=:keyword';
      

   }


	  // Fetch all existing comments
   public getCities(): Observable<any[]> {

		 // ...using get request
		 return this.http.get(this.config.ServiceApi + 'CITies')
		 // ...and calling .json() on the response to return data
			 .map((res: Response) => res.json())
		 //...errors if any
			 .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

	 }

	
	 public postUserServiceNeed(data): Observable<any[]> {

		 let headers = new Headers({ 'Content-Type': 'multipart/form-data' });
		 headers.append('Authorization', 'Bearer ')
		 let options = new RequestOptions({ headers: headers });
		 var json = JSON.stringify(data);
		 var params = 'json=' + json;
		 // ...using get request
		 return this.http.post(this.config.ServiceApi + 'USERSERVICENEEDs', data,options)
		 // ...and calling .json() on the response to return data
			 .map((res: Response) => res.json())
		 //...errors if any
			 .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


		 }

   
}