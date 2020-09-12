import { Component, OnInit } from '@angular/core';
import {OvertimeHour} from '../../models/overTimeModel/overtime-hour';


@Component({
  selector: 'app-overtime-hour-edit',
  templateUrl: './overtime-hour-edit.component.html',
  styleUrls: ['./overtime-hour-edit.component.css']
})
export class OvertimeHourEditComponent implements OnInit {
   public overtimeHour: OvertimeHour = new OvertimeHour();
   public zilele: Array<{ label: string, value: string }> = [
     { label: '1 Decembrie', value: '1' },
     { label: '25 Decembrie', value: '2' },
     { label: '26 Decembrie', value: '3' }
   ];

  constructor() { }

  ngOnInit(): void {
    this.overtimeHour.id = 5;
  }

}
