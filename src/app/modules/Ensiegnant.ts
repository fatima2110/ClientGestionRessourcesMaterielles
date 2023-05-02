import { User } from "./User";

export class Ensiegnant extends User{
  departement:string;
  constructor(){
    super();
    this.departement='';
  }
}
