import { Component, OnInit } from '@angular/core';
import {ProgramType} from "../../models/programTypeModel/program-type";

@Component({
  selector: 'app-program-types',
  templateUrl: './program-types.component.html',
  styleUrls: ['./program-types.component.css']
})
export class ProgramTypesComponent implements OnInit {

  public programTypes: ProgramType[] = [
    {id:1, name:'normal schedule', startsAt:'08:00:00', endsAt:'16:00:00'},
    {id:2, name:'first shift', startsAt:'06:00:00', endsAt:'14:00:00'},
    {id:3, name:'second shift', startsAt:'14:00:00', endsAt:'22:00:00'},
    {id:4, name:'third shift', startsAt:'22:00:00', endsAt:'06:00:00'},
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
