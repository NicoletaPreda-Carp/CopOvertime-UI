import {Component, OnInit} from "@angular/core";
import {ProgramType} from "../../../models/programTypeModel/program-type";
import {ProgramTypeService} from "../../../services/program-type-service/program-type.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-program-types",
  templateUrl: "./program-types.component.html",
  styleUrls: ["./program-types.component.css"]
})
export class ProgramTypesComponent implements OnInit {
  public programTypes: ProgramType[] = []


  constructor(
    private service: ProgramTypeService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
   this.refreshList();
  }

  refreshList(): void {
    this.service.getAll().subscribe(value => this.programTypes = value);
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => this.refreshList());
  }

  add(): void {
    const url = "/program-type-edit/0";
    this.router.navigateByUrl(url);
  }
}
