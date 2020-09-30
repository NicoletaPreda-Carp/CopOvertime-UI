import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RanksComponent } from './ranks/ranks.component';
import { RankEditComponent } from './rank-edit/rank-edit.component';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [RanksComponent, RankEditComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    RouterModule,
    TableModule,
    FormsModule
  ]
})
export class RanksModule { }
