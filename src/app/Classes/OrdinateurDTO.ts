export class OrdinateurDTO {
  id: number;
  cpu: string;
  ram: string;
  ecran: string;
  disque: string;
  enseignant: string;
  departement: string;
  marque: string;
  code_barre: string;
  prix: number;
  Appleoffreid: number;
  datedebut: Date;
  dateFin: Date;
  datelivraison!:Date;
  dureegarantie!:number;
  fournissuer:string;
  code_barre_img!: string;
  qte!: number;
  constructor() {
    this.fournissuer='';
    this.id = 0;
    this.cpu = '';
    this.ram = '';
    this.ecran = '';
    this.disque = '';
    this.enseignant = '';
    this.departement = '';
    this.marque = '';
    this.code_barre = '';
    this.prix = 0;
    this.Appleoffreid = 0;
    this.datedebut = new Date();
    this.dateFin = new Date();
  }
  }
  