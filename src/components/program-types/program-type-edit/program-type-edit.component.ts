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
    private service: ProgramTypeService
  ) {
    this.route.paramMap
      .subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        this.service.getById(id).subscribe(value => this.programType = value);
      });
  }


  ngOnInit(): void {
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
    const url = "/programTypes";
    this.router.navigateByUrl(url);
  }
}
