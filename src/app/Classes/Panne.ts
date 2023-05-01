import { Material } from "./Material";
import { User } from "./User";

export class Panne {
  id!: string;
  constat!: string;
  date_panne!: string;
  frequence!: string;
  technicien!: User;
  materiel!: Material;
}
