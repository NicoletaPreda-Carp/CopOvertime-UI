import {GenericModel} from "../genericModel/generic-model";
import {LegalDayOff} from "../legalDayOffModel/legal-day-off";
import {ValidNumberOfDays} from "../validNumberOfDaysModel/valid-number-of-days";

export class OvertimeHour extends GenericModel {
  public performedAt: Date;
  public startedAt: Date;
  public endedAt: Date;
  public numberOfHours: number;
  public expiresAt: Date;
  public isWeekend: boolean;
  public enabled: boolean;
  public legalDaysOffId: number;
  public validNumberOfDaysId: number;

  public legalDayOff: LegalDayOff;
  public validNumberOfDays: ValidNumberOfDays;
}
