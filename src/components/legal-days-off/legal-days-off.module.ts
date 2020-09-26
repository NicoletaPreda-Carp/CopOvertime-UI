import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalDaysOffComponent } from './legal-days-off/legal-days-off.component';
import { LegalDayOffEditComponent } from './legal-day-off-edit/legal-day-off-edit.component';



@NgModule({
  declarations: [LegalDaysOffComponent, LegalDayOffEditComponent],
  imports: [
    CommonModule
  ]
})
export class LegalDaysOffModule { }
