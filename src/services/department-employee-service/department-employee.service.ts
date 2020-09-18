import {Injectable} from '@angular/core';
import {ApiService} from "../api-service/api-service";
import {HttpClient} from "@angular/common/http";
import {DepartmentEmployee} from "../../models/departmentEmployeeModel/department-employee";

@Injectable({
  providedIn: 'root'
})
export class DepartmentEmployeeService extends ApiService<DepartmentEmployee>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/departmentEmployees";
  }
}
