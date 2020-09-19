import {GenericModel} from "../genericModel/generic-model";

export class ProgramType extends GenericModel{
  public name: string;
  public startsAt: Date;
  public endsAt: Date;
}
