import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramTypesComponent } from './program-types/program-types.component';
import {RouterModule} from "@angular/router";
import { ProgramTypeEditComponent } from './program-type-edit/program-type-edit.component';
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [ProgramTypesComponent, ProgramTypeEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    FormsModule
  ]
})
export class ProgramTypesModule { }
