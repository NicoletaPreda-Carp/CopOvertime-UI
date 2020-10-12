import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DepartmentsComponent } from "./departments/departments.component";
import { DepartmentEditComponent } from "./department-edit/department-edit.component";
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DepartmentService} from "../../services/department-service/department.service";
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@NgModule({
  declarations: [DepartmentsComponent, DepartmentEditComponent],
    imports: [
        CommonModule,
        TableModule,
        RouterModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        ConfirmDialogModule
    ],
  providers: [
    DepartmentService
  ]
})
export class DepartmentsModule { }
