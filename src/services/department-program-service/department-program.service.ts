import {Injectable} from '@angular/core';
import {ApiService} from "../api-service/api-service";
import {HttpClient} from "@angular/common/http";
import {DepartmentProgram} from "../../models/departmentProgramModel/department-program";

@Injectable({
  providedIn: 'root'
})
export class DepartmentProgramService extends ApiService<DepartmentProgram>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/departmentPrograms";
  }
}
