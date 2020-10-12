import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DepartmentProgramService} from "../../../services/department-program-service/department-program.service";
import {ConfirmationService} from "primeng/api";
import {DepartmentProgram} from "../../../models/departmentProgramModel/department-program";
import {Department} from "../../../models/departmentModel/department";
import {DepartmentService} from "../../../services/department-service/department.service";
import {ProgramTypeService} from "../../../services/program-type-service/program-type.service";
import {ProgramType} from "../../../models/programTypeModel/program-type";

@Component({
  selector: 'app-department-program-edit',
  templateUrl: './department-program-edit.component.html',
  styleUrls: ['./department-program-edit.component.css']
})
export class DepartmentProgramEditComponent implements OnInit {

  public departmentProgram: DepartmentProgram = new DepartmentProgram();
  public departments: Department[] = [];
  public programs: ProgramType[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DepartmentProgramService,
    private confirmationService: ConfirmationService,
    private departmentService: DepartmentService,
    private programService: ProgramTypeService,
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.getPrograms();
    this.getDepartments();
    this.getModel();
  }

  private getModel(): void {
    this.route.paramMap
      .subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        this.service.getById(id).subscribe(value => {
          this.departmentProgram = value;
          this.setDepartments()
          this.setPrograms()
        });
      });
  }

  saveVoid(): void {
    this.departmentProgram.departmentId = this.departmentProgram.department.id;
    this.departmentProgram.programTypeId = this.departmentProgram.program.id;
    this.service.save(this.departmentProgram).subscribe(value => {
      this.departmentProgram = value;
      this.gotoList();
    });
  }

  saveBoolean(): boolean {
    this.confirmationService.confirm({
      message: "Are you sure you want to save this item?",
      accept: () => {
        this.saveVoid();
      }
    });
    return false;
  }

  cancel(): void {
    this.gotoList();
  }

  gotoList(): void {
    const url = "/department-programs";
    this.router.navigateByUrl(url);
  }

  private setPrograms(): void {
    if (this.programs.length > 0 && this.departmentProgram !== undefined) {
      this.departmentProgram.program = this.programs.find
      (program => program.id === this.departmentProgram.programTypeId);
      if (!this.departmentProgram.program) {
        this.departmentProgram.program = this.programs[0];
      }
    }
  }

  private setDepartments(): void {
    if (this.departments.length > 0 && this.departmentProgram !== undefined) {
      this.departmentProgram.department = this.departments.find
      (department => department.id === this.departmentProgram.departmentId);
      if (!this.departmentProgram.department) {
        this.departmentProgram.department = this.departments[0];
      }
    }
  }

  private getPrograms(): void {
    this.programService.getAll().subscribe(program => {
      this.programs = program;
      this.setPrograms();
    });
  }

  private getDepartments(): void {
    this.departmentService.getAll().subscribe(department => {
      this.departments = department;
      console.log(department)
      this.setDepartments();
    });
  }

}
