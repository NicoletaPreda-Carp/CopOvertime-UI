import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OvertimeHoursComponent } from './overtime-hours/overtime-hours.component';
import { OvertimeHoursPerEmployeeComponent } from './overtime-hours-per-employee/overtime-hours-per-employee.component';
import { OvertimeHourEditComponent } from './overtime-hour-edit/overtime-hour-edit.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from "@angular/forms";
import { TableModule } from 'primeng/table';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [OvertimeHoursComponent, OvertimeHoursPerEmployeeComponent, OvertimeHourEditComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    TableModule,
    RouterModule
  ]
})
export class OvertimeHoursModule { }
