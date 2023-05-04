import {Fournisseur} from "./Fournisseur";
import {EnumMember} from "@angular/compiler-cli/src/ngtsc/reflection";

export class Proposition{

   status:string
  fournisseur:Fournisseur

  constructor(){
    this.status = 'En_cour'
    this.fournisseur = new Fournisseur()
  }

}
