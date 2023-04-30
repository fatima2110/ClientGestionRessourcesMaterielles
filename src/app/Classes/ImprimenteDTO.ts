
 export class ImprimenteDTO  {
   
    id: number;
    enseignant: string;
    departement: string;
    marque: string;
    code_barre: string;
    prix: number;
    Appleoffreid: number;
    datedebut: Date;
    dateFin: Date;
    resolution: string;
    vitesse: string;
    datelivraison!:Date;
    dureegarantie!:string;
    fournissuer!:string;
    code_barre_img!: string;
    qte!: number;
    constructor() {
      this.id = 0;
      this.enseignant = '';
      this.departement = '';
      this.marque = '';
      this.code_barre = '';
      this.prix = 0;
      this.Appleoffreid = 0;
      this.datedebut = new Date();
      this.dateFin = new Date();
      this.resolution = '';
      this.vitesse = '';
    }
  }
