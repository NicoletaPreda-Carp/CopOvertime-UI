import {Injectable} from '@angular/core';
import {ApiService} from "../api-service/api-service";
import {HttpClient} from "@angular/common/http";
import {ProgramType} from "../../models/programTypeModel/program-type";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class ProgramTypeService extends ApiService<ProgramType>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/programTypes";
  }

  public beforeSave(item: ProgramType): void {
    const timeFormatString = "HH:mm";
    (item.startsAt as any) = moment(item.startsAt).format(timeFormatString);
    (item.endsAt as any) = moment(item.endsAt).format(timeFormatString);
  }
}
