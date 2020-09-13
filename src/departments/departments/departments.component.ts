import { Component, OnInit } from "@angular/core";
import {Department} from "../../models/departmentModel/department";
import {DepartmentsService} from "../../services/departments.service";

@Component({
  selector: "app-departments",
  templateUrl: "./departments.component.html",
  styleUrls: ["./departments.component.css"]
})
export class DepartmentsComponent implements OnInit {

  constructor(private service: DepartmentsService) {
    this.service.getAll().subscribe(value => this.departments = value);
  }

  public departments: Department[] = [];

  ngOnInit(): void {
  }

}
