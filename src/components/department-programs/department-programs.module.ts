import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DepartmentProgramsComponent} from './department-programs/department-programs.component';
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";
import {DepartmentProgramService} from "../../services/department-program-service/department-program.service";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { DepartmentProgramEditComponent } from './department-program-edit/department-program-edit.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [DepartmentProgramsComponent, DepartmentProgramEditComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    ConfirmDialogModule,
    FormsModule
  ],
  providers: [
    DepartmentProgramService,
  ]
})
export class DepartmentProgramsModule { }
