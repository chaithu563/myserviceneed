import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {myComponents} from './app.depend';
import {Ng2BootstrapModule} from 'ng2-bootstrap';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routing }              from './app.routing';
import {AgGridModule} from 'ag-grid-ng2/main';
import {DropdownModule} from "ng2-dropdown";
@NgModule({
	imports: [RouterModule, BrowserModule, Ng2BootstrapModule, DropdownModule, AgGridModule.withAotSupport(), routing],
	declarations: [...myComponents],
	 providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
