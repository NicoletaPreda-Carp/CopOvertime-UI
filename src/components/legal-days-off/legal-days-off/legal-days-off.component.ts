import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LegalDayOffService} from "../../../services/legal-day-off-service/legal-day-off.service";
import {LegalDayOff} from "../../../models/legalDayOffModel/legal-day-off";
import {ConfirmationService} from "primeng/api";
import * as moment from "moment";

@Component({
  selector: 'app-legal-days-off',
  templateUrl: './legal-days-off.component.html',
  styleUrls: ['./legal-days-off.component.css']
})
export class LegalDaysOffComponent implements OnInit {

  constructor(
    private router: Router,
    private service: LegalDayOffService,
    public confirmationService: ConfirmationService,
  ) {
  }

  public legalDaysOff: LegalDayOff[] = [];


  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.service.getAll().subscribe(value => this.legalDaysOff = value);
  }

  add(): void {
    const url = "/legal-day-off-edit/0";
    this.router.navigateByUrl(url);
  }

  delete(id: number): boolean {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete this item?",
      accept: () => {
        this.service.delete(id).subscribe(() => this.refreshList());
      }
    });
    return false;
  }

  displayListFormatedDate(dateObject: Date): string {
    const dateFormatString = "DD-MM-Y";
    return moment(dateObject).format(dateFormatString);
  }
}
