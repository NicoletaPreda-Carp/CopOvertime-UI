import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentProgramsComponent } from './department-programs/department-programs.component';
import { DepartmentProgramEditComponent } from './department-program-edit/department-program-edit.component';
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DepartmentsService} from "../../services/department-service/departments.service";
import {DepartmentProgramService} from "../../services/department-program-service/department-program.service";



@NgModule({
  declarations: [DepartmentProgramsComponent, DepartmentProgramEditComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    ConfirmDialogModule
  ],
  providers: [
    DepartmentProgramService
  ]
})
export class DepartmentProgramsModule { }
