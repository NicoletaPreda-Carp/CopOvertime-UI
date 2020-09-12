import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {OvertimeHoursModule} from "../overtime-hours/overtime-hours.module";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    OvertimeHoursModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
