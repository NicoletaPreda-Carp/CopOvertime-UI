import { Injectable } from "@angular/core";
import {ApiService} from "../api-service";
import {OvertimeHour} from "../../models/overTimeModel/overtime-hour";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class OvertimeHoursService extends ApiService<OvertimeHour>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/overtimeHours";
  }
}
