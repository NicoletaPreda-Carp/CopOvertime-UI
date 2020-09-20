import {Component, OnInit} from "@angular/core";
import {OvertimeHour} from "../../../models/overTimeModel/overtime-hour";
import {OvertimeHoursService} from "../../../services/overtime-hours-service/overtime-hours-service";
import {LegalDayOffService} from "../../../services/legal-day-off-service/legal-day-off.service";
import {Router} from "@angular/router";
import {ValidNumberOfDaysService} from "../../../services/valid-number-of-days-service/valid-number-of-days.service";
import {LegalDayOff} from "../../../models/legalDayOffModel/legal-day-off";
import {ValidNumberOfDays} from "../../../models/validNumberOfDaysModel/valid-number-of-days";

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
    private validNumberOfDaysService: ValidNumberOfDaysService
  ) {
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.legalDaysOffService.getAll()
      .subscribe(daysOff => {
        this.daysOff = daysOff;
        this.validNumberOfDaysService.getAll().subscribe(days => {
          this.validNumberOfDays = days;
          this.service.getAll().subscribe(value => this.overtimeHours = value);
        });
      });
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => this.refreshList());
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
}
