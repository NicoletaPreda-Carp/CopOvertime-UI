import {GenericModel} from "../genericModel/generic-model";
import {Department} from "../departmentModel/department";
import {ProgramType} from "../programTypeModel/program-type";

export class DepartmentProgram extends GenericModel{
  public departmentId: number;
  public programTypeId: number;

  public department: Department;
  public programType: ProgramType;


}
