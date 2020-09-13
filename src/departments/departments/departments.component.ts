import { Component, OnInit } from "@angular/core";
import {Department} from "../../models/departmentModel/department";
import {DepartmentsService} from "../../services/departments.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: "app-departments",
  templateUrl: "./departments.component.html",
  styleUrls: ["./departments.component.css"]
})
export class DepartmentsComponent implements OnInit {

  constructor(
    private router: Router,
    private service: DepartmentsService
  ) {
  }

  public departments: Department[] = [];

  ngOnInit(): void {
    this.service.getAll().subscribe(value => this.departments = value);
  }

  add(): void {
    const url = "/department-edit/0";
    this.router.navigateByUrl(url);
  }
}
