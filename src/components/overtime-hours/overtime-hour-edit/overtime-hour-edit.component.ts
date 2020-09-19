import {Component, OnInit} from "@angular/core";
import {OvertimeHour} from "../../../models/overTimeModel/overtime-hour";
import {LegalDayOffService} from "../../../services/legal-day-off-service/legal-day-off.service";
import {OvertimeHoursService} from "../../../services/overtime-hours-service/overtime-hours-service";
import {LegalDayOff} from "../../../models/legalDayOffModel/legal-day-off";
import {ActivatedRoute, Router} from "@angular/router";
import {ValidNumberOfDays} from "../../../models/validNumberOfDaysModel/valid-number-of-days";
import {ValidNumberOfDaysService} from "../../../services/valid-number-of-days-service/valid-number-of-days.service";


@Component({
  selector: "app-overtime-hour-edit",
  templateUrl: "./overtime-hour-edit.component.html",
  styleUrls: ["./overtime-hour-edit.component.css"]
})
export class OvertimeHourEditComponent implements OnInit {

  public overtimeHour: OvertimeHour = new OvertimeHour();
  public daysOff: LegalDayOff[] = [];
  public validNumberOfDays: ValidNumberOfDays [] = [];

  constructor(
    private legalDaysOffService: LegalDayOffService,
    private validNumberOfDaysService: ValidNumberOfDaysService,
    private service: OvertimeHoursService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }


  private getData(): void {
    this.getLegalDaysOff();
    this.getValidNumberOfDays();
    this.getModel();
  }

  private getLegalDaysOff(): void {
    this.legalDaysOffService.getAll().subscribe(daysOff => {
      this.daysOff = [{id: null, dayOff: "N/A"}].concat(daysOff);
      this.setLegalDaysOff();
    });
  }

  private getValidNumberOfDays(): void {
    this.validNumberOfDaysService.getAll().subscribe(validNumberOffDays => {
      this.validNumberOfDays = validNumberOffDays;
      this.setNumberOfDays();
    });
  }

  private getModel(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get("id"), 10);
      if (id > 0) {
        this.service.getById(id).subscribe(overtimeHour => {
          console.log(overtimeHour);
          overtimeHour.endedAt = new Date("1970-01-01T" + overtimeHour.endedAt + "Z");
          overtimeHour.startedAt = new Date("1970-01-01T" + overtimeHour.startedAt + "Z");
          overtimeHour.performedAt = new Date(overtimeHour.performedAt);
          overtimeHour.expiresAt = new Date(overtimeHour.expiresAt);
          this.overtimeHour = overtimeHour;
          this.setLegalDaysOff();
          this.setNumberOfDays();
        });
      }
    });
  }

  private setNumberOfDays(): void {
    if (this.validNumberOfDays.length > 0 && this.overtimeHour !== undefined) {
      this.overtimeHour.validNumberOfDays = this.validNumberOfDays.find
              (vnd => vnd.id === this.overtimeHour.validNumberOfDaysId);
      if (!this.overtimeHour.validNumberOfDays) {
        this.overtimeHour.validNumberOfDays = this.validNumberOfDays[0];
      }
    }
  }

  private setLegalDaysOff(): void {
    if (this.daysOff.length > 0 && this.overtimeHour !== undefined) {
      this.overtimeHour.legalDayOff = this.daysOff.find(dof => dof.id === this.overtimeHour.legalDayOffId);
      if (!this.overtimeHour.legalDayOff) {
        this.overtimeHour.legalDayOff = this.daysOff[0];
      }
    }
  }

  save(): void {
    this.overtimeHour.validNumberOfDaysId = this.overtimeHour.validNumberOfDays.id;
    this.overtimeHour.legalDayOffId = this.overtimeHour.legalDayOff?.id;
    console.log("Saving model", this.overtimeHour);
    this.service.save(this.overtimeHour).subscribe(value => {
      this.overtimeHour = value;
      this.gotoList();
    });
  }

  cancel(): void {
    this.gotoList();
  }

  gotoList(): void {
    const url = "/overtime-hours";
    this.router.navigateByUrl(url);
  }
}


