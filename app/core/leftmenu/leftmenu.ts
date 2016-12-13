import { Component } from '@angular/core';
import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
@Component({
	selector: 'leftmenu',
	templateUrl: 'app/core/leftmenu/leftmenu.html',
		styleUrls: ['app/core/leftmenu/leftmenu.css'],
		providers: [AccordionComponent, AccordionPanelComponent],
		directives: [ ROUTER_DIRECTIVES]
})
export class LeftMenuComponent {

	constructor(private router: Router) {



	}

 linkClicked(ob)
 {
	 this.router.navigate(['PublicPage']);
 }

}
