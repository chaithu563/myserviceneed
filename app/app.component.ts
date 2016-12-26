import { Component } from '@angular/core';


import { MSN } from './jaydata-model/MSN';
import { MSNOdataService } from './services/msn.odataservice';

@Component({
    selector: 'my-app',
  // 	template: '<header> </header> <div class="row" >  <div class="col-md-2" style="height: 100%;"> <leftmenu> </leftmenu> </div> <div class="col-md-10" style="height: 100%;"> <adminview></adminview>  </div> </div>',
    template: '<header> </header>  <router-outlet></router-outlet> ',
    providers: [MSNOdataService]
   // directives: [HeaderComponent]
   
})
export class AppComponent {
    cities: any;
    constructor(private mSNOdataService: MSNOdataService) {

			this.init();
		}

    private init() {
        //this.mSNOdataService.getContext(
        //    context => this.OnContextLoaded(context)
        //);
    }
   // private OnContextLoaded(context:any) {
			//context.CITies.toArray(function(cities){
            
   //             this.cities = cities;
   //             console.log(this.cities);
			//});
				
   // }

}
