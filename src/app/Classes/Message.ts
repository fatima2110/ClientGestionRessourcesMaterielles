import { User } from "./User";

export class Message {
  id!: number;
  message!: string;
  emteur!: string;
  idem!:number;
  idrec!:number;

  recepteur!: User;
  idFournisseur!: number;
  date!:Date;
  exsist!:boolean;
}
