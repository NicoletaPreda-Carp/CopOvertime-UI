import { Injectable } from "@angular/core";
import {ApiService} from "../api-service/api-service";
import {OvertimeHour} from "../../models/overTimeModel/overtime-hour";
import {HttpClient} from "@angular/common/http";
import DateTimeFormat = Intl.DateTimeFormat;
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

@Injectable({
  providedIn: "root"
})
export class OvertimeHoursService extends ApiService<OvertimeHour>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/overtimeHours";
  }

  public beforeSave(item: OvertimeHour): void {
    const timeOptions : DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    };
    const dateOptions: DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZoneName: "Europe/Bucharest"
    }
    const tf = new DateTimeFormat("en-GB", timeOptions);
    const df = new DateTimeFormat("en-GB", dateOptions);

    (item.endedAt as any) = tf.format( item.endedAt);
    (item.startedAt as any) = tf.format( item.startedAt);
    (item.performedAt as any) = df.format( item.performedAt);
    (item.expiresAt as any) = df.format( item.expiresAt);
    if (!item.enabled) {
      item.enabled = false;
    }
    if (!item.isWeekend) {
      item.isWeekend = false;
    }
  }
}
// never any undefined null false
