import {Component, OnInit} from "@angular/core";
import {ProgramType} from "../../../models/programTypeModel/program-type";
import {ActivatedRoute, Router} from "@angular/router";
import {ProgramTypeService} from "../../../services/program-type-service/program-type.service";
import * as moment from "moment";
import {ConfirmationService} from "primeng/api";

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
    private confirmationService: ConfirmationService,
  ) {
  }

  private getModel(): void {
    this.route.paramMap
      .subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        if (id > 0) {
          this.service.getById(id).subscribe(programType => {
            const timeFormatString = "HH:mm";
            programType.startsAt = moment(programType.startsAt as any as string, timeFormatString).toDate();
            programType.endsAt = moment(programType.startsAt as any as string, timeFormatString).toDate();
            this.programType = programType;
          });
        }
      });
  }

  ngOnInit(): void {
    this.getModel()
  }

  saveVoid(): void {
    this.service.save(this.programType).subscribe(value => {
      this.programType = value;
      this.gotoList();
    });
  }

  saveBoolean(): boolean {
    this.confirmationService.confirm({
      message: "Are you sure you want to save this item?",
      accept: () => {
        this.saveVoid();
      }
    });
    return false;
  }

  cancel(): void {
    this.gotoList();
  }

  gotoList(): void {
    const url = "/program-types";
    this.router.navigateByUrl(url);
  }
}
