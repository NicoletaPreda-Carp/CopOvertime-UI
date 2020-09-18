import {Injectable} from '@angular/core';
import {ApiService} from "../api-service/api-service";
import {HttpClient} from "@angular/common/http";
import {Rank} from "../../models/rankModel/rank";

@Injectable({
  providedIn: 'root'
})
export class RankService extends ApiService<Rank>{
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = "/api/ranks";
  }
}
