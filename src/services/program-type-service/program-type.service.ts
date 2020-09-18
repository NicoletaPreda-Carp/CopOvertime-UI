import {Injectable} from '@angular/core';
import {ApiService} from "../api-service/api-service";
import {HttpClient} from "@angular/common/http";
import {ProgramType} from "../../models/programTypeModel/program-type";

@Injectable({
  providedIn: 'root'
})
export class ProgramTypeService extends ApiService<ProgramType>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/programTypes";
  }
}
