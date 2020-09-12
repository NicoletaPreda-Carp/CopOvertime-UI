import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OvertimeHoursComponent } from './overtime-hours/overtime-hours.component';
import { OvertimeHoursPerEmployeeComponent } from './overtime-hours-per-employee/overtime-hours-per-employee.component';



@NgModule({
  declarations: [OvertimeHoursComponent, OvertimeHoursPerEmployeeComponent],
  imports: [
    CommonModule
  ]
})
export class OvertimeHoursModule { }
