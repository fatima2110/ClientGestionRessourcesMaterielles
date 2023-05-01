import { MaterielStatus } from "src/app/models/MaterielStatus";

export class Materiel {
  id:number;
  type:string;
  marque:string;
  code_barre:string;
  qtn:number;
  date_affectation:Date;
  materielState:MaterielStatus;

  constructor() {
    this.id=0;
    this.type='Ordinateur';
    this.marque='HP'
    this.code_barre='';
    this.qtn=1;
    this.date_affectation=new Date();
    this.materielState=MaterielStatus.EnService;
   }
}
