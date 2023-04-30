import { Fournisseur } from "./Fournisseur";
import { MaterialProposition } from "./MaterialProposition";
export class Proposition {
  id!: string;
  status!: boolean;
  fournisseur!: Fournisseur;
  materiels_propositions!: MaterialProposition[];
}
