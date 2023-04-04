export class BesoinImprimante {
  id: number;
  ensignant: string;
  resolution: string;
  vitesse: string;
  qtn: number;
  date_envoie:Date;
  constructor(){
    this.id = 0;
    this.ensignant = '';
    this.resolution='';
    this.vitesse='';
    this.qtn=0;
    this.date_envoie=new Date();
  }
}
