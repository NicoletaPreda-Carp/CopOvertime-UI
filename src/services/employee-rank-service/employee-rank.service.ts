import {Injectable} from '@angular/core';
import {ApiService} from "../api-service/api-service";
import {HttpClient} from "@angular/common/http";
import {EmployeeRank} from "../../models/employeeRankModel/employee-rank";

@Injectable({
  providedIn: 'root'
})
export class EmployeeRankService extends ApiService<EmployeeRank>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/employeeRanks";
  }
}
