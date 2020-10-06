import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DepartmentProgramService} from "../../../services/department-program-service/department-program.service";
import {ConfirmationService} from "primeng/api";
import {DepartmentsService} from "../../../services/department-service/departments.service";
import {ProgramTypeService} from "../../../services/program-type-service/program-type.service";
import {DepartmentProgram} from "../../../models/departmentProgramModel/department-program";

@Component({
  selector: 'app-department-programs',
  templateUrl: './department-programs.component.html',
  styleUrls: ['./department-programs.component.css']
})
export class DepartmentProgramsComponent implements OnInit {

  constructor(
    private router: Router,
    private service: DepartmentProgramService,
    private confirmationService: ConfirmationService,
    private departmentService: DepartmentsService,
    private programService: ProgramTypeService,
  ) { }

  public departmentPrograms: DepartmentProgram[] = [];
  ngOnInit(): void {
    this.refreshList();
  }

  add(): void {
    const url = "/department-programs-edit/0";
    this.router.navigateByUrl(url);
  }

  refreshList():void{
    this.service.getAll().subscribe(value => this.departmentPrograms = value);
  }

  delete(id: number): boolean {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete this item?",
      accept: () => {
        this.service.delete(id).subscribe(() => this.refreshList());
      }
    });
    return false;
  }

}
