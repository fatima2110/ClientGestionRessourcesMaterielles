import { User } from "./User";

export class EnsiegnantAffectation extends User{
  departement:string;
  constructor(){
    super();
    this.departement='';
  }
}
