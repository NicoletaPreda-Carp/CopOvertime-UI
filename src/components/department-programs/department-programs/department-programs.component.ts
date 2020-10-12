import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {DepartmentProgramService} from "../../../services/department-program-service/department-program.service";
import {DepartmentProgram} from "../../../models/departmentProgramModel/department-program";
import {ProgramType} from "../../../models/programTypeModel/program-type";
import {Department} from "../../../models/departmentModel/department";
import {ProgramTypeService} from "../../../services/program-type-service/program-type.service";
import {DepartmentService} from "../../../services/department-service/department.service";

@Component({
  selector: 'app-department-programs',
  templateUrl: './department-programs.component.html',
  styleUrls: ['./department-programs.component.css']
})
export class DepartmentProgramsComponent implements OnInit {

  public departmentPrograms: DepartmentProgram[] = [];
  public programs: ProgramType[] = [];
  public departments: Department[] = [];


  constructor(
    private router: Router,
    private service: DepartmentProgramService,
    private confirmationService: ConfirmationService,
    private programsService: ProgramTypeService,
    private departmentsService: DepartmentService,
  ) { }



  ngOnInit(): void {
    this.refreshList();
  }

  add(): void {
    const url = "/department-program-edit/0";
    this.router.navigateByUrl(url);
  }

  refreshList():void{
    this.service.getAll().subscribe(value => this.departmentPrograms = value);
    this.programsService.getAll().subscribe(program => this.programs = program);
    this.departmentsService.getAll().subscribe(department => this.departments = department);
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

  getDepartmentName(id: number): string{
    const dept = this.departments.find(department => department.id === id);
    if (dept.id === 0) {
      dept.name = "N/A";
    }
    return dept ? dept.name: "Not found";
  }

  getProgramName(id: number) : string {
    const program = this.programs.find(program => program.id === id);
    if (program.id === 0) {
      program.name = "N/A";
    }
    return program ? program.name: "Not found";
  }
}
