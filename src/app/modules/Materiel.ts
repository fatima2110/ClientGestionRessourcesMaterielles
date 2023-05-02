import { AppelOffre } from "./AppelOffre";
import { Ensiegnant } from "./Ensiegnant";

export class Materiel {
  id: number;
  marque: string;
  code_barre: string;
  prix: number;

  date_livraison: Date;

  duree_garentie: number;

  verifie: boolean;


  appelOffre: AppelOffre;

  ensiegnant: Ensiegnant;
  constructor() {
    this.id = 0;
    this.marque = '';
    this.code_barre = '';
    this.prix = 0.00;
    this.date_livraison = new Date();
    this.duree_garentie = 0;
    this.verifie = false;
    this.appelOffre = new AppelOffre();
    this.ensiegnant = new Ensiegnant();
  }
}
