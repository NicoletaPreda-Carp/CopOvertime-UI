import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LegalDayOffService} from "../../../services/legal-day-off-service/legal-day-off.service";
import {LegalDayOff} from "../../../models/legalDayOffModel/legal-day-off";

@Component({
  selector: 'app-legal-days-off',
  templateUrl: './legal-days-off.component.html',
  styleUrls: ['./legal-days-off.component.css']
})
export class LegalDaysOffComponent implements OnInit {

  constructor(
    private router: Router,
    private service: LegalDayOffService,
  ) { }

  public legalDaysOff: LegalDayOff[] = [];


  ngOnInit(): void {
    this.service.getAll().subscribe(value => this.legalDaysOff = value);
  }

  add(): void {
    const url = "/legal-day-off-edit/0";
    this.router.navigateByUrl(url);
  }
}
