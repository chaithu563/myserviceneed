import { Component } from '@angular/core';
import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
@Component({
	selector: 'leftmenu',
	templateUrl: 'app/core/topmenu/topmenu.html',
		styleUrls: ['app/core/topmenu/topmenu.css'],
		providers: [AccordionComponent, AccordionPanelComponent],
		directives: [ ROUTER_DIRECTIVES]
})
export class TopMenuComponent {

	constructor(private router: Router) {



	}

 
}
