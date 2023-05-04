export class Fournisseur {
  id:number
  nom_societe:string
  adresse:string
  email:string
  gerant:string
  pass:string

  constructor(){
    this.id = 0;
    this.adresse= '';
    this.email = '';
    this.nom_societe = '';
    this.gerant = '';
    this.pass = '';
  }
}
