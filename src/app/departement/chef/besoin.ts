export class Besoin {
  id: number;
  ensignant: string;
  type: string;
  cpu: string;
  ram: string;
  disque: string;
  ecran: string;
  qtn: number;
  date_envoie:Date;
  constructor() {
    this.id = 0;
    this.ensignant = '';
    this.type='';
    this.cpu='';
    this.ram='';
    this.disque='';
    this.ecran='';
    this.qtn=0;
    this.date_envoie=new Date();

  }
}
