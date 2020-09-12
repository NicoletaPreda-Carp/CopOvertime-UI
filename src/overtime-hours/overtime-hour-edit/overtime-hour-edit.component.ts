import { Component, OnInit } from '@angular/core';
import {OvertimeHour} from "../../models/overtime-hour";


@Component({
  selector: 'app-overtime-hour-edit',
  templateUrl: './overtime-hour-edit.component.html',
  styleUrls: ['./overtime-hour-edit.component.css']
})
export class OvertimeHourEditComponent implements OnInit {
   public overtimeHour: OvertimeHour;

  constructor() { }

  ngOnInit(): void {
  }

}
