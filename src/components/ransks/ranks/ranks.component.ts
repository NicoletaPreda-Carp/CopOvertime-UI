import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {RankService} from "../../../services/rank-service/rank.service";
import {Rank} from "../../../models/rankModel/rank";

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {

  constructor(
    private service: RankService,
    private router: Router,
    private confirmationService: ConfirmationService,
  ) { }

  public ranks: Rank[] = [];

  ngOnInit(): void {
    this.refreshList();
  }
  refreshList(): void {
    this.service.getAll().subscribe(value => this.ranks = value);
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

  add(): void {
    const url = "/rank-edit/0";
    this.router.navigateByUrl(url);
  }
}
