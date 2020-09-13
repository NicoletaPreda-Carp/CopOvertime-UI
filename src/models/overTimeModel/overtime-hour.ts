import {GenericModel} from "../genericModel/generic-model";

export class OvertimeHour extends GenericModel {
  public performedAt: string;
  public startedAt: string;
  public endedAt: string;
  public numberOfHours: number;
  public expiresAt: string;
  public isWeekend: boolean;
  public enabled: boolean;
  public legalDayOffId: number;
  public validNumberOfDaysId: number;
}
