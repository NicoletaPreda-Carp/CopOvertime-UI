import {GenericModel} from "../genericModel/generic-model";

export class EmployeeRank extends GenericModel {
  public employeeId: number;
  public rankId: number;
  public startedAt: string;
  public endedAt: string;
}
