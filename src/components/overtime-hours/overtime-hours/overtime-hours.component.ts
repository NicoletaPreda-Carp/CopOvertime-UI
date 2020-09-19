import {Component, OnInit} from "@angular/core";
import {OvertimeHour} from "../../../models/overTimeModel/overtime-hour";
import {OvertimeHoursService} from '../../../services/overtime-hours-service/overtime-hours-service';
import {LegalDayOffService} from "../../../services/legal-day-off-service/legal-day-off.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-overtime-hours",
  templateUrl: "./overtime-hours.component.html",
  styleUrls: ["./overtime-hours.component.css"]
})
export class OvertimeHoursComponent implements OnInit {
  public overtimeHours: OvertimeHour[] = [];

  constructor(
    private router: Router,
    private service: OvertimeHoursService,
  ) {
  }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.service.getAll().subscribe(value => this.overtimeHours = value);
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => this.refreshList());
  }

  add(): void {
    const url = "/overtime-hours-edit/0";
    this.router.navigateByUrl(url);
  }
}
