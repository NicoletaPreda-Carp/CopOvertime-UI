import {Component, OnInit} from "@angular/core";
import {OvertimeHour} from "../../../models/overTimeModel/overtime-hour";
import {OvertimeHoursService} from "../../../services/overtime-hours-service/overtime-hours-service";
import {LegalDayOffService} from "../../../services/legal-day-off-service/legal-day-off.service";
import {Router} from "@angular/router";
import {ValidNumberOfDaysService} from "../../../services/valid-number-of-days-service/valid-number-of-days.service";
import {LegalDayOff} from "../../../models/legalDayOffModel/legal-day-off";
import {ValidNumberOfDays} from "../../../models/validNumberOfDaysModel/valid-number-of-days";
import {ConfirmationService} from 'primeng/api';
import * as moment from "moment";

@Component({
  selector: "app-overtime-hours",
  templateUrl: "./overtime-hours.component.html",
  styleUrls: ["./overtime-hours.component.css"]
})
export class OvertimeHoursComponent implements OnInit {
  public overtimeHours: OvertimeHour[] = [];
  public daysOff: LegalDayOff[] = [];
  public validNumberOfDays: ValidNumberOfDays[] = [];

  constructor(
    private router: Router,
    private service: OvertimeHoursService,
    private legalDaysOffService: LegalDayOffService,
    private validNumberOfDaysService: ValidNumberOfDaysService,
    public confirmationService: ConfirmationService,
  ) {
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.legalDaysOffService.getAll()
      .subscribe(daysOff => {
        this.daysOff = daysOff;
        this.adjustDaysOffArray();
        this.validNumberOfDaysService.getAll().subscribe(days => {
          this.validNumberOfDays = days;
          this.service.getAll().subscribe(value =>
            this.overtimeHours = value);
        });
      });
  }

  adjustDaysOffArray(): void {
    this.daysOff = this.daysOff.map(dayOff => {
      dayOff.dayOff = moment(dayOff.dayOff as any as string, "Y-MM-DD").format("DD-MM-Y");
      return dayOff;
    });
  }

  delete(id: number): boolean {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete this item?",
      accept: () => {
        this.service.delete(id).subscribe(() => this.refreshList());
      }
    });
    return false;
  }

  add(): void {
    const url = "/overtime-hours-edit/0";
    this.router.navigateByUrl(url);
  }

  getLegalDayName(id: number): string {
    const dayOffModel = this.daysOff.find(dayOff => dayOff.id === id);
    if (dayOffModel.id === 0) {
      dayOffModel.dayOff = "N/A";
    }
    return dayOffModel ? dayOffModel.dayOff : "Not found";
  }

  getValidNumberOfDays(id: number): number {
    const dayModel = this.validNumberOfDays.find(day => day.id === id);
    return dayModel ? dayModel.validNumberOfDays : -1;
  }

 displayListFormatedDate(dateObject: Date): string {
   const dateFormatString = "DD-MM-Y";
   return moment(dateObject).format(dateFormatString);
  }

  displayListFormatedTime(dateObject: string): string {
    const timeFormatString = "HH:mm";
    return moment(dateObject, "HH:mm:ss").format(timeFormatString);
  }
}
