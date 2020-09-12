import {Component, OnInit} from '@angular/core';
import {ProgramType} from "../../models/programTypeModel/program-type";

@Component({
  selector: 'app-program-type-edit',
  templateUrl: './program-type-edit.component.html',
  styleUrls: ['./program-type-edit.component.css']
})
export class ProgramTypeEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public programType: ProgramType = new ProgramType();
}
