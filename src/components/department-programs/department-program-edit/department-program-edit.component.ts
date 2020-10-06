import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DepartmentProgramService} from "../../../services/department-program-service/department-program.service";
import {ConfirmationService} from "primeng/api";
import {DepartmentProgram} from "../../../models/departmentProgramModel/department-program";

@Component({
  selector: 'app-department-program-edit',
  templateUrl: './department-program-edit.component.html',
  styleUrls: ['./department-program-edit.component.css']
})
export class DepartmentProgramEditComponent implements OnInit {

  public departmentProgram: DepartmentProgram = new  DepartmentProgram();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DepartmentProgramService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getModel();
  }

  private getModel(): void {
    this.route.paramMap
      .subscribe(params => {
        const id = parseInt(params.get("id"), 10);
        this.service.getById(id).subscribe(value => this.departmentProgram = value);
      });
  }

  saveVoid(): void {
    this.service.save(this.departmentProgram).subscribe(value => {
      this.departmentProgram = value;
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
    const url = "/department-programs";
    this.router.navigateByUrl(url);
  }
}
