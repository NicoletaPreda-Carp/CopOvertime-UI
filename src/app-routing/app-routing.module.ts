import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "../app/homepage/homepage.component";
import {OvertimeHoursComponent} from "../overtime-hours/overtime-hours/overtime-hours.component";
import {OvertimeHoursPerEmployeeComponent} from "../overtime-hours/overtime-hours-per-employee/overtime-hours-per-employee.component";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'overtime-hours', component: OvertimeHoursComponent},
  {path: 'overtime-hours-employee', component: OvertimeHoursPerEmployeeComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],


})
export class AppRoutingModule { }
