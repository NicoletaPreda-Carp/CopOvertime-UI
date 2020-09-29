import {GenericModel} from "../genericModel/generic-model";
import {DepartmentProgram} from "../departmentProgramModel/department-program";

export class Department extends GenericModel {
  public name: string;

  public departmentProgram: DepartmentProgram;
}
