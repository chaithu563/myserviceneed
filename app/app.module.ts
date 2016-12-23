import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {myComponents} from './app.depend';
import {Ng2BootstrapModule} from 'ng2-bootstrap';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routing }              from './app.routing';
import {AgGridModule} from 'ag-grid-ng2/main';
import {DropdownModule} from "ng2-dropdown";
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
	imports: [RouterModule, BrowserModule, HttpModule, Ng2BootstrapModule, DropdownModule, AgGridModule.withAotSupport(), routing,
		AgmCoreModule.forRoot({
		apiKey: 'YOUR_KEY'
		})
		],
	declarations: [...myComponents],
	 providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
