import { Panne } from "./Panne";
import { Message } from "./Message";

export class User {
  id!: string;
  login!: string;
  nom!: string;
  pass!: string;
  photo_profile!: string;
  prenom!: string;
  role!: string;
  telephone!: string;
  pannes!: Panne[];
  messages_envoyes!: Message[];
  messages_recus!: Message[];
}