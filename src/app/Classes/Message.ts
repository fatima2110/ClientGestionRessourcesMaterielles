import { User } from "./User";

export class Message {
  id!: number;
  message!: string;
  emetteur!: User;
  recepteur!: User;
  idFournisseur!: number;
}