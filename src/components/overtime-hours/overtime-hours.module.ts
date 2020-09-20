import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OvertimeHoursComponent} from "./overtime-hours/overtime-hours.component";
import {OvertimeHourEditComponent} from "./overtime-hour-edit/overtime-hour-edit.component";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from 'primeng/checkbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';


@NgModule({
  declarations: [OvertimeHoursComponent, OvertimeHourEditComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    TableModule,
    DropdownModule,
    RouterModule,
    CalendarModule,
    CheckboxModule,
    ConfirmDialogModule,
  ],
  providers:[
    ConfirmationService,
  ]
})
export class OvertimeHoursModule { }
