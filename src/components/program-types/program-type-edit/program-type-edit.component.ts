import {Component, OnInit} from "@angular/core";
import {ProgramType} from "../../../models/programTypeModel/program-type";
import {ActivatedRoute, Router} from "@angular/router";
import {ProgramTypeService} from "../../../services/program-type-service/program-type.service";

@Component({
  selector: "app-program-type-edit",
  templateUrl: "./program-type-edit.component.html",
  styleUrls: ["./program-type-edit.component.css"]
})
export class ProgramTypeEditComponent implements OnInit {

  public programType: ProgramType = new ProgramType();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProgramTypeService,
  ) {
  }

  private getModel(): void {
    this.route.paramMap
      .subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        if (id > 0) {
          this.service.getById(id).subscribe(programType => {
            programType.startsAt = new Date("1970-01-01T" + programType.startsAt + "Z");
            programType.endsAt = new Date("1970-01-01T" + programType.endsAt + "Z");
            this.programType = programType;
          });
        }
      });
  }

  ngOnInit(): void {
    this.getModel()
  }

  save(): void {
    this.service.save(this.programType).subscribe(value => {
      this.programType = value;
      this.gotoList();
    });
  }

  cancel(): void {
    this.gotoList();
  }

  gotoList(): void {
    const url = "/program-types";
    this.router.navigateByUrl(url);
  }
}
