import {Component, OnInit} from "@angular/core";
import {Department} from "../../../models/departmentModel/department";
import {DepartmentsService} from "../../../services/department-service/departments.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OvertimeHour} from "../../../models/overTimeModel/overtime-hour";
import {DepartmentProgram} from "../../../models/departmentProgramModel/department-program";
import {DepartmentProgramService} from "../../../services/department-program-service/department-program.service";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: "app-department-edit",
  templateUrl: "./department-edit.component.html",
  styleUrls: ["./department-edit.component.css"]
})
export class DepartmentEditComponent implements OnInit {

  public department: Department = new Department();
  public departmentPrograms: DepartmentProgram[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DepartmentsService,
    private confirmationService: ConfirmationService,
    private depProgramService: DepartmentProgramService,
  ) {
  }

  ngOnInit(): void {
    this.getModel();
  }

  private getModel(): void {
    this.route.paramMap
      .subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        this.service.getById(id).subscribe(value => this.department = value);
      });
  }

  saveVoid(): void {
    this.service.save(this.department).subscribe(value => {
      this.department = value;
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
    const url = "/departments";
    this.router.navigateByUrl(url);
  }

}
