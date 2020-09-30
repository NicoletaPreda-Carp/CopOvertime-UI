import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalDaysOffComponent } from './legal-days-off/legal-days-off.component';
import { LegalDayOffEditComponent } from './legal-day-off-edit/legal-day-off-edit.component';
import {RouterModule} from "@angular/router";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";



@NgModule({
  declarations: [LegalDaysOffComponent, LegalDayOffEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    ConfirmDialogModule,
    TableModule,
    FormsModule,
    CalendarModule
  ]
})
export class LegalDaysOffModule { }
