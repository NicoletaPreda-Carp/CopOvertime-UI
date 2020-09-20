import {Component, OnInit} from "@angular/core";
import {ProgramType} from "../../../models/programTypeModel/program-type";
import {ProgramTypeService} from "../../../services/program-type-service/program-type.service";
import {Router} from "@angular/router";
import {ConfirmationService} from 'primeng/api';

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
    private confirmationService: ConfirmationService,
  ) {
  }

  ngOnInit(): void {
   this.refreshList();
  }

  refreshList(): void {
    this.service.getAll().subscribe(value => this.programTypes = value);
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
    const url = "/program-type-edit/0";
    this.router.navigateByUrl(url);
  }
}
