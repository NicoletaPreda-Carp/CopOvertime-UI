import { Injectable } from "@angular/core";
import {ApiService} from "../api-service/api-service";
import {OvertimeHour} from "../../models/overTimeModel/overtime-hour";
import {HttpClient} from "@angular/common/http";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class OvertimeHoursService extends ApiService<OvertimeHour>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/overtimeHours";
  }

  public beforeSave(item: OvertimeHour): void {

    const dateFormatString = "Y-MM-DD";
    const timeFormatString = "HH:mm";

    (item.performedAt as any) = moment(item.performedAt).format(dateFormatString);
    (item.expiresAt as any) = moment(item.expiresAt).format(dateFormatString);

    (item.endedAt as any) = moment(item.endedAt).format(timeFormatString);
    (item.startedAt as any) = moment(item.startedAt).format(timeFormatString);

    if (!item.enabled) {
      item.enabled = false;
    }
    if (!item.isWeekend) {
      item.isWeekend = false;
    }
  }
}
// never any undefined null false
