import {Injectable} from '@angular/core';
import {ApiService} from "../api-service/api-service";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../models/employeeModel/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService<Employee>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/employees";
  }
}
