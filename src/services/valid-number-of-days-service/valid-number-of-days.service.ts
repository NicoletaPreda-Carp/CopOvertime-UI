import { Injectable } from '@angular/core';
import {ApiService} from "../api-service/api-service";
import {LegalDayOff} from "../../models/legalDayOffModel/legal-day-off";
import {HttpClient} from "@angular/common/http";
import {ValidNumberOfDays} from "../../models/validNumberOfDaysModel/valid-number-of-days";

@Injectable({
  providedIn: 'root'
})
export class ValidNumberOfDaysService extends ApiService<ValidNumberOfDays> {
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/validNumberOfDays";
  }
}
