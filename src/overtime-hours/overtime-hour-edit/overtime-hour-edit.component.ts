import { Component, OnInit } from "@angular/core";
import {OvertimeHour} from "../../models/overTimeModel/overtime-hour";
import {LegaldayoffService} from "../../services/legal-day-off-service/legaldayoff.service";
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
    private legalDaysoffService: LegaldayoffService,
    private service: OvertimeHoursService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.legalDaysoffService.getAll().subscribe(daysOff => {
      this.daysOff = daysOff;
      this.route.paramMap.subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        this.service.getById(id).subscribe(overtimeHour => this.overtimeHour = overtimeHour);
      });
    });
  }

}
