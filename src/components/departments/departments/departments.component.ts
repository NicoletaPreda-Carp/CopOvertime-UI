import {Component, OnInit} from "@angular/core";
import {Department} from "../../../models/departmentModel/department";
import {DepartmentService} from "../../../services/department-service/department.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {DepartmentProgramService} from "../../../services/department-program-service/department-program.service";
import {DepartmentProgram} from "../../../models/departmentProgramModel/department-program";

@Component({
  selector: "app-departments",
  templateUrl: "./departments.component.html",
  styleUrls: ["./departments.component.css"]
})
export class DepartmentsComponent implements OnInit {

  constructor(
    private router: Router,
    private service: DepartmentService,
    private confirmationService: ConfirmationService,
    private departmentProgramService: DepartmentProgramService,
  ) {
  }

  public departments: Department[] = [];
  public departmentPrograms: DepartmentProgram[] = [];

  ngOnInit(): void {
    this.refreshList();
  }

  add(): void {
    const url = "/department-edit/0";
    this.router.navigateByUrl(url);
  }

  refreshList(): void {
    this.service.getAll().subscribe(value => this.departments = value);
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

  private getDepartmentPrograms(): void {
    this.departmentProgramService.getAll().subscribe(departmentProgram => {
      this.departmentPrograms = departmentProgram;
    });
  }
}
