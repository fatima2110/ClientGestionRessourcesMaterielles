
import { Material } from "./Material";
import { Proposition } from "./Proposition";

export class MaterialProposition {
  id!: string;
  marque!: string;
  prix!: number;
  materiel!: Material;
  proposition!: Proposition;
}