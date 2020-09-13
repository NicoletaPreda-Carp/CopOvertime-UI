import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../api-service/api-service";
import {LegalDayOff} from "../../models/legalDayOffModel/legal-day-off";

@Injectable({
  providedIn: "root"
})
export class LegaldayoffService extends ApiService<LegalDayOff>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/legalDaysOff";
  }
}
