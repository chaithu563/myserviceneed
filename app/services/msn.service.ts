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

	 public deleteUserServiceNeed(data): Observable<any[]> {

		 //application/x-www-form-urlencoded
		 //application/json; charset=utf-8
		 let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
		 headers.append('Authorization', 'Bearer ')
		 let options = new RequestOptions({ headers: headers });
		// var json = JSON.stringify(data);
	//	 var params = 'json=' + json;
		 // ...using get request
		 return this.http.delete(this.config.ServiceApi + 'USERSERVICENEEDs/'+data)
		 // ...and calling .json() on the response to return data
			 .map((res: Response) => res.json())
		 //...errors if any
			 .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


		 }

	
	 public postUserServiceNeed(data): Observable<any[]> {

		 //application/x-www-form-urlencoded
		 //application/json; charset=utf-8
		 let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
		 headers.append('Authorization', 'Bearer ')
		 let options = new RequestOptions({ headers: headers });
		 var json = JSON.stringify(data);
		 var params = 'json=' + json;
		 // ...using get request
		 return this.http.post(this.config.ServiceApi + 'USERSERVICENEEDs', json,options)
		 // ...and calling .json() on the response to return data
			 .map((res: Response) => res.json())
		 //...errors if any
			 .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


		 }


	 public putUserServiceNeed(data): Observable<any[]> {

		 //application/x-www-form-urlencoded
		 //application/json; charset=utf-8
		 let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
		 headers.append('Authorization', 'Bearer ')
		 let options = new RequestOptions({ headers: headers });
		 var json = JSON.stringify(data);
		 var params = 'json=' + json;
		 // ...using get request
		 return this.http.put(this.config.ServiceApi + 'USERSERVICENEEDs', json, options)
		 // ...and calling .json() on the response to return data
			 .map((res: Response) => res.json())
		 //...errors if any
			 .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


		 }


     // Fetch all available servicess by user filter
     public getServiceWorks(data): Observable<any[]> {

         // ...using get request
         var query = JSON.stringify(data);

         return this.http.get(this.config.ServiceApi + 'USERSERVICENEEDs' + '?query=' + encodeURIComponent(query))
			 // ...and calling .json() on the response to return data
				 .map((res) =>
					 //JSON.parse(JSON.stringify(res._body))
					 res.json()

					 )
             //...errors if any
             .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

     }

     public getServiceById(id): Observable<any[]> {

         // ...using get request
       

         return this.http.get(this.config.ServiceApi + 'SERVICESUBCATEGORies' + '?id=' + id)
             // ...and calling .json() on the response to return data
             .map((res) =>
                 //JSON.parse(JSON.stringify(res._body))
                 res.json()

             )
             //...errors if any
             .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

     }

   
}