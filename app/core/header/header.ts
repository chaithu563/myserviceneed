import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MSNService } from '../../services/msn.service';
import { Observable } from 'rxjs/Observable';
declare var $:JQueryStatic;
@Component({
    selector: 'header',
    templateUrl: 'app/core/header/header.html',
    styleUrls: ['app/core/header/header.css'],
    providers: [MSNService]
    
})
export class HeaderComponent implements AfterViewInit{

    categories: any;
    constructor(private msnService: MSNService ) {

        this.init();
      
    }

    private init() {
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
    ngAfterViewInit() {
        $('#main-menu').smartmenus({
            subMenusSubOffsetX: 1,
            subMenusSubOffsetY: -5
        });
    }

}
