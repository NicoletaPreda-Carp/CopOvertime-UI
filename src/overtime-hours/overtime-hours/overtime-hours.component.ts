import { Component, OnInit } from '@angular/core';
import {OvertimeHour} from '../../models/overtime-hour';

@Component({
  selector: 'app-overtime-hours',
  templateUrl: './overtime-hours.component.html',
  styleUrls: ['./overtime-hours.component.css']
})
export class OvertimeHoursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public overtimeHours: OvertimeHour[] = [
    {id: 1, performedAt: '2020-01-23', startedAt: '08:00', endedAt: '12:00', numberOfHours: 4, expiresAt: '2020-06-23', isWeekend:true, enabled: false, legalDayOffId: 2, validNumberOfDaysId: 15 },
    {id: 2, performedAt: '2020-01-29', startedAt: '12:00', endedAt: '16:00', numberOfHours: 4, expiresAt: '2020-06-23', isWeekend:true, enabled: false, legalDayOffId: 2, validNumberOfDaysId: 15 },
    {id: 3, performedAt: '2020-01-23', startedAt: '08:00', endedAt: '12:00', numberOfHours: 4, expiresAt: '2020-06-23', isWeekend:true, enabled: false, legalDayOffId: 2, validNumberOfDaysId: 15 },
    {id: 4, performedAt: '2020-01-23', startedAt: '08:00', endedAt: '12:00', numberOfHours: 4, expiresAt: '2020-06-23', isWeekend:true, enabled: false, legalDayOffId: 2, validNumberOfDaysId: 15 }
  ]

}
