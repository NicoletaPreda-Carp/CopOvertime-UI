import {Component, OnInit} from '@angular/core';
import {LegalDayOff} from "../../../models/legalDayOffModel/legal-day-off";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {LegalDayOffService} from "../../../services/legal-day-off-service/legal-day-off.service";
import * as moment from "moment";

@Component({
  selector: 'app-legal-day-off-edit',
  templateUrl: './legal-day-off-edit.component.html',
  styleUrls: ['./legal-day-off-edit.component.css']
})
export class LegalDayOffEditComponent implements OnInit {

  public legalDayOff: LegalDayOff = new LegalDayOff();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LegalDayOffService,
    private confirmationService: ConfirmationService,
  ) {
  }

  ngOnInit(): void {
    this.getModel();
  }

  private getModel(): void {
    this.route.paramMap
      .subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        this.service.getById(id).subscribe(legalDayOff => {
          this.legalDayOff = legalDayOff
        });
      });
  }

  saveVoid(): void {
    this.service.save(this.legalDayOff).subscribe(value => {
      this.legalDayOff = value;
      this.gotoList();
    });
  }

  saveBoolean(): boolean {
    this.confirmationService.confirm({
      message: "Are you sure you want to save this item?",
      accept: () => {
        this.saveVoid();
      }
    });
    return false;
  }

  cancel(): void {
    this.gotoList();
  }

  gotoList(): void {
    const url = "/legal-days-off";
    this.router.navigateByUrl(url);
  }

}
