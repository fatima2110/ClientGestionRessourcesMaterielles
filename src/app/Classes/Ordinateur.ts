import { Material } from "./Material";
export class Ordinateur extends Material{
  override id!: string;
  ram!: string;
  processeur!: string;
  disque_dur!: string;
  ecran!: String;
}
