import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {OvertimeHoursModule} from "../overtime-hours/overtime-hours.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProgramTypesModule} from "../program-types/program-types.module";
import {DepartmentsModule} from "../departments/departments.module";
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    OvertimeHoursModule,
    ProgramTypesModule,
    DepartmentsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
