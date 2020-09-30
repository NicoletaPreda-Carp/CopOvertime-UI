import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {RankService} from "../../../services/rank-service/rank.service";
import * as moment from "moment";
import {Rank} from "../../../models/rankModel/rank";

@Component({
  selector: 'app-rank-edit',
  templateUrl: './rank-edit.component.html',
  styleUrls: ['./rank-edit.component.css']
})
export class RankEditComponent implements OnInit {

  public rank: Rank = new Rank();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RankService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getModel();
  }

  private getModel(): void {
    this.route.paramMap
      .subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        if (id > 0) {
          this.service.getById(id).subscribe(rank => {
            this.rank = rank;
          });
        }
      });
  }

  saveVoid(): void {
    this.service.save(this.rank).subscribe(value => {
      this.rank = value;
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
    const url = "/ranks";
    this.router.navigateByUrl(url);
  }

}
