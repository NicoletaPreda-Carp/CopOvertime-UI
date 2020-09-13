import { Component, OnInit } from "@angular/core";
import {Department} from "../../models/departmentModel/department";

@Component({
  selector: "app-department-edit",
  templateUrl: "./department-edit.component.html",
  styleUrls: ["./department-edit.component.css"]
})
export class DepartmentEditComponent implements OnInit {
  public department: Department = new Department();

  constructor() { }

  ngOnInit(): void {
  }

}
