import {Component, OnInit} from "@angular/core";
import {OvertimeHour} from "../../models/overTimeModel/overtime-hour";
import {LegalDayOffService} from "../../services/legal-day-off-service/legal-day-off.service";
import {OvertimeHoursService} from "../../services/overtime-hours-service/overtime-hours-service";
import {LegalDayOff} from "../../models/legalDayOffModel/legal-day-off";
import {ActivatedRoute, Router} from "@angular/router";
import {ValidNumberOfDays} from "../../models/validNumberOfDaysModel/valid-number-of-days";
import {ValidNumberOfDaysService} from "../../services/valid-number-of-days-service/valid-number-of-days.service";


@Component({
  selector: "app-overtime-hour-edit",
  templateUrl: "./overtime-hour-edit.component.html",
  styleUrls: ["./overtime-hour-edit.component.css"]
})
export class OvertimeHourEditComponent implements OnInit {

  public overtimeHour: OvertimeHour = new OvertimeHour();
  public daysOff: LegalDayOff[] = [];
  public validNumberOfDays: ValidNumberOfDays [] = []

  constructor(
    private legalDaysOffService: LegalDayOffService,
    private validNumberOfDaysService: ValidNumberOfDaysService,
    private service: OvertimeHoursService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getLegalDaysDropDown();
    this.getValidNumberOfDaysDropdown()
  }

  public getLegalDaysDropDown() {
    this.legalDaysOffService.getAll().subscribe(daysOff => {
      this.daysOff = daysOff;
      this.route.paramMap.subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        this.service.getById(id).subscribe(overtimeHour => this.overtimeHour = overtimeHour);
      });
    });
  }

  public getValidNumberOfDaysDropdown() {
    this.validNumberOfDaysService.getAll().subscribe(validNumberOffDays => {
      this.validNumberOfDays = validNumberOffDays;
      this.route.paramMap.subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        this.service.getById(id).subscribe(overtimeHourNew => this.overtimeHour = overtimeHourNew)
      })
    })
  }

  save(): void {
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


