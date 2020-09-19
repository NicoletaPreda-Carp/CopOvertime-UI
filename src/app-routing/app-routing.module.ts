import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "../app/homepage/homepage.component";
import {OvertimeHoursComponent} from "../components/overtime-hours/overtime-hours/overtime-hours.component";
import {OvertimeHourEditComponent} from "../components/overtime-hours/overtime-hour-edit/overtime-hour-edit.component";
import {ProgramTypesComponent} from "../components/program-types/program-types/program-types.component";
import {ProgramTypeEditComponent} from "../components/program-types/program-type-edit/program-type-edit.component";
import {DepartmentsComponent} from "../components/departments/departments/departments.component";
import {DepartmentEditComponent} from "../components/departments/department-edit/department-edit.component";


const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "overtime-hours", component: OvertimeHoursComponent},
  {path: "overtime-hours-edit/:id", component: OvertimeHourEditComponent},
  {path: "program-types", component: ProgramTypesComponent},
  {path: "program-type-edit/:id", component: ProgramTypeEditComponent},
  {path: "departments", component: DepartmentsComponent},
  {path: "department-edit/:id", component: DepartmentEditComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],


})
export class AppRoutingModule { }
