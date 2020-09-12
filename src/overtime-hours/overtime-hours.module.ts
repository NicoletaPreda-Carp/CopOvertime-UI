import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OvertimeHoursComponent } from './overtime-hours/overtime-hours.component';
import { OvertimeHoursPerEmployeeComponent } from './overtime-hours-per-employee/overtime-hours-per-employee.component';
import { OvertimeHourEditComponent } from './overtime-hour-edit/overtime-hour-edit.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [OvertimeHoursComponent, OvertimeHoursPerEmployeeComponent, OvertimeHourEditComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule
  ]
})
export class OvertimeHoursModule { }
