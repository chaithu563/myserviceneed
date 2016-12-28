﻿import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {myComponents, myDirectives} from './app.depend';
import {Ng2BootstrapModule} from 'ng2-bootstrap';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routing }              from './app.routing';
import {AgGridModule} from 'ag-grid-ng2/main';
import {DropdownModule} from "ng2-dropdown";
import { AgmCoreModule, MapsAPILoader,NoOpMapsAPILoader,MouseEvent } from 'angular2-google-maps/core';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';


@NgModule({
    imports: [RouterModule, BrowserModule, HttpModule, Ng2BootstrapModule, DropdownModule, AgGridModule.withAotSupport(),
        routing, Ng2AutoCompleteModule,
		AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBUMARm9vJQWQy27emWKhHvqyg7_faAM9Q',
            libraries: ['places']
		})
		],
    declarations: [...myComponents, ...myDirectives],
	 providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
