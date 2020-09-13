import { Injectable } from "@angular/core";
import {ApiService} from "./api-service";
import {Department} from "../models/departmentModel/department";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DepartmentsService extends ApiService<Department>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/departments";
  }
}
