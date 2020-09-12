import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "../app/homepage/homepage.component";
import {OvertimeHoursComponent} from "../overtime-hours/overtime-hours/overtime-hours.component";
import {OvertimeHoursPerEmployeeComponent} from "../overtime-hours/overtime-hours-per-employee/overtime-hours-per-employee.component";
import {OvertimeHourEditComponent} from "../overtime-hours/overtime-hour-edit/overtime-hour-edit.component";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'overtime-hours', component: OvertimeHoursComponent},
  {path: 'overtime-hours-employee', component: OvertimeHoursPerEmployeeComponent},
  {path: 'overtime-hours-edit/:id', component: OvertimeHourEditComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],


})
export class AppRoutingModule { }
