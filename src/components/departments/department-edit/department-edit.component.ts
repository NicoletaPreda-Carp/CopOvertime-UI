import { Component, OnInit } from "@angular/core";
import {Department} from "../../../models/departmentModel/department";
import {DepartmentsService} from "../../../services/department-service/departments.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-department-edit",
  templateUrl: "./department-edit.component.html",
  styleUrls: ["./department-edit.component.css"]
})
export class DepartmentEditComponent implements OnInit {

  public department: Department = new Department();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DepartmentsService
  ) {
    this.route.paramMap
      .subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        this.service.getById(id).subscribe(value => this.department = value);
      });
  }

  ngOnInit(): void {
  }

  save(): void {
    this.service.save(this.department).subscribe(value => {
      this.department = value;
      this.gotoList();
    });
  }

  cancel(): void {
    this.gotoList();
  }

  gotoList(): void {
    const url = "/departments";
    this.router.navigateByUrl(url);
  }
}
