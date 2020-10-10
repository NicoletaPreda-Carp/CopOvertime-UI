import {GenericModel} from "../../models/genericModel/generic-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OvertimeHour} from "../../models/overTimeModel/overtime-hour";

export abstract class ApiService<T extends GenericModel> {
  private readonly API_SERVER = "http://localhost:8091";
  private http: HttpClient;

  protected endpoint = "";

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getAll(): Observable<T[]> {
    const url = this.API_SERVER + this.endpoint;
    return this.http.get<T[]>(url);
  }

  public getById(id: number): Observable<T> {
    const url = this.API_SERVER + this.endpoint + "/" + id;
    return this.http.get<T>(url);
  }

  public save(item: T): Observable<T> {
    const url = this.API_SERVER + this.endpoint;
    this.beforeSave(item);
    if (item.id == null || item.id > 0) {
      return this.http.put<T>(url, item);
    }
    return this.http.post<T>(url, item);
  }

  public delete(id: number): Observable<T> {
    const url = this.API_SERVER + this.endpoint + "/" + id;
    return this.http.delete<T>(url);
  }

  public beforeSave(item: T): void {}
  public displayListFormatedDate(item: T) : void {}

}
