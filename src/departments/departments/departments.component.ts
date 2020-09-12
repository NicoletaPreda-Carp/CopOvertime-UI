import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/departmentModel/department";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public departments : Department[] = [
    {id:1, name:"BITSLF"},
    {id:2, name:"BITSLF-Padoc"},
    {id:3, name:"Expertize"},
    {id:4, name:"Baze de date"},
    {id:5, name:"IT"},
    {id:6, name:"Secretariat"},
  ]

}
