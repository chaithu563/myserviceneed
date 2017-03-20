import { NgModule }      from '@angular/core';
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
import { DatePickerModule } from 'ng2-datepicker';
import { ReactiveFormsModule } from '@angular/forms'
import { NKDatetimeModule } from 'ng2-datetime';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import {ModalModule} from "ng2-modal";
import { AUTH_PROVIDERS } from 'angular2-jwt';
@NgModule({
    imports: [RouterModule, BrowserModule, HttpModule, Ng2BootstrapModule, DropdownModule, AgGridModule.withAotSupport(),
			routing, Ng2AutoCompleteModule, DatePickerModule, ReactiveFormsModule, NKDatetimeModule, Ng2CloudinaryModule, ModalModule,
		AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBUMARm9vJQWQy27emWKhHvqyg7_faAM9Q',
            libraries: ['places']
		})
		],
    declarations: [...myComponents, ...myDirectives],
		providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ...AUTH_PROVIDERS],
    bootstrap: [AppComponent]
})
export class AppModule { }
