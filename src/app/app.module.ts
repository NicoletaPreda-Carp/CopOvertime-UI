import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {AppRoutingModule} from "../app-routing/app-routing.module";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {OvertimeHoursModule} from "../components/overtime-hours/overtime-hours.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProgramTypesModule} from "../components/program-types/program-types.module";
import {DepartmentsModule} from "../components/departments/departments.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LegalDaysOffModule} from "../components/legal-days-off/legal-days-off.module";
import {RanksModule} from "../components/ransks/ranks.module";



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
    HttpClientModule,
    LegalDaysOffModule,
    RanksModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
