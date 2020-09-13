import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DepartmentsComponent } from "./departments/departments.component";
import { DepartmentEditComponent } from "./department-edit/department-edit.component";
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DepartmentsService} from "../services/departments.service";

@NgModule({
  declarations: [DepartmentsComponent, DepartmentEditComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule,
    FormsModule,
    InputTextModule
  ],
  providers: [
    DepartmentsService
  ]
})
export class DepartmentsModule { }
