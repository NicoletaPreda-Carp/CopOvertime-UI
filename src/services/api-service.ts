import {GenericModel} from "../models/generic-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class ApiService<T extends GenericModel> {
  private readonly API_SERVER = "http://localhost:8082";
  private http: HttpClient;

  protected endpoint = "";

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.API_SERVER + this.endpoint);
  }
}
