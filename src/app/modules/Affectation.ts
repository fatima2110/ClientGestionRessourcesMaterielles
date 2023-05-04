import { Ensiegnant } from "./Ensiegnant";
import { EnsiegnantAffectation } from "./EnsiegnantAffectation";
import { Materiel } from "./Materiel";

export class Affectation {
  id?: number;

  departement: string;

  materiel: Materiel;
  ensiegnantAff: Ensiegnant;
  date_affectation: Date;
  constructor() {

    this.departement = '';
    this.materiel = new Materiel();
    this.ensiegnantAff = new Ensiegnant();
    this.date_affectation = new Date();
  }
}
