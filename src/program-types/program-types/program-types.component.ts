import {Component, OnInit} from "@angular/core";
import {ProgramType} from "../../models/programTypeModel/program-type";
import {ProgramTypeService} from "../../services/program-type-service/program-type.service";

@Component({
  selector: "app-program-types",
  templateUrl: "./program-types.component.html",
  styleUrls: ["./program-types.component.css"]
})
export class ProgramTypesComponent implements OnInit {
  public programTypes: ProgramType[] = []


  constructor(
    private service: ProgramTypeService,
  ) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(value => this.programTypes = value);
  }

}
