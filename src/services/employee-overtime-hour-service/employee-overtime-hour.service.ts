import {Injectable} from '@angular/core';
import {ApiService} from "../api-service/api-service";
import {HttpClient} from "@angular/common/http";
import {EmployeeOvertimeHour} from "../../models/employeeOvertimeHourModel/employee-overtime-hour";

@Injectable({
  providedIn: 'root'
})
export class EmployeeOvertimeHourService extends ApiService<EmployeeOvertimeHour>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/employeeOvertimeHours";
  }
}

