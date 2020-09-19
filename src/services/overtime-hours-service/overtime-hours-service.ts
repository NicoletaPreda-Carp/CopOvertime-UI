import { Injectable } from "@angular/core";
import {ApiService} from "../api-service/api-service";
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

  public beforeSave(item: OvertimeHour): void {
    (item.endedAt as any) = item.endedAt.toLocaleTimeString();
    (item.startedAt as any) = item.startedAt.toLocaleTimeString();
    if (!item.enabled) {
      item.enabled = false;
    }
    if (!item.isWeekend) {
      item.isWeekend = false;
    }
  }
}
// never any undefined null false
