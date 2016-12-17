import { Component,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var $:JQueryStatic;
@Component({
    selector: 'header',
    templateUrl: 'app/core/header/header.html',
		styleUrls: ['app/core/header/header.css'],
    providers: []
})
export class HeaderComponent implements AfterViewInit{

    constructor() {

      
    }

    ngAfterViewInit() {
        $('#main-menu').smartmenus({
            subMenusSubOffsetX: 1,
            subMenusSubOffsetY: -8
        });
    }

}
