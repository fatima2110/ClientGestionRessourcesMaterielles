import { AppelOffre } from "./AppelOffre";
import { Enseignant } from "./Enseignant";
import { Panne } from "./Panne";
import { MaterialProposition } from "./MaterialProposition";

export class Material {
  id!: string;
  code_barre!: string;
  prix!: number;
  date_livraison!: Date;
  duree_garentie!: number;
  appelOffre!: AppelOffre;
  pannes!: Panne[];
  enseignant!: Enseignant;
  materiels_propositions!: MaterialProposition[];
}