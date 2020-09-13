import { Component, OnInit } from "@angular/core";
import {OvertimeHour} from "../../models/overTimeModel/overtime-hour";
import {OvertimeHoursService} from '../../services/overtime-hours-service';

@Component({
  selector: "app-overtime-hours",
  templateUrl: "./overtime-hours.component.html",
  styleUrls: ["./overtime-hours.component.css"]
})
export class OvertimeHoursComponent implements OnInit {
  public overtimeHours: OvertimeHour[] = [];

  constructor(
    private service: OvertimeHoursService
  ) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(value => this.overtimeHours = value);
  }

}
