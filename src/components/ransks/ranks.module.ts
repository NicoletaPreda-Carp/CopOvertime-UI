import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RanksComponent } from './ranks/ranks.component';
import { RankEditComponent } from './rank-edit/rank-edit.component';



@NgModule({
  declarations: [RanksComponent, RankEditComponent],
  imports: [
    CommonModule
  ]
})
export class RanksModule { }
