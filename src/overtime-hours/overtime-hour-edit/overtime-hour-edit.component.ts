import { Component, OnInit } from "@angular/core";
import {OvertimeHour} from "../../models/overTimeModel/overtime-hour";
import {LegalDayOffService} from "../../services/legal-day-off-service/legal-day-off.service";
import {OvertimeHoursService} from "../../services/overtime-hours-service/overtime-hours-service";
import {LegalDayOff} from "../../models/legalDayOffModel/legal-day-off";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: "app-overtime-hour-edit",
  templateUrl: "./overtime-hour-edit.component.html",
  styleUrls: ["./overtime-hour-edit.component.css"]
})
export class OvertimeHourEditComponent implements OnInit {
   public overtimeHour: OvertimeHour = new OvertimeHour();
   public daysOff: LegalDayOff[] = [];

  constructor(
    private legalDaysOffService: LegalDayOffService,
    private service: OvertimeHoursService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.legalDaysOffService.getAll().subscribe(daysOff => {
      this.daysOff = daysOff;
      this.route.paramMap.subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        this.service.getById(id).subscribe(overtimeHour => this.overtimeHour = overtimeHour);
      });
    });
  }

}
