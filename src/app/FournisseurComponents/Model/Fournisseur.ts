export class Fournisseur {
  id:number
  nomSociete:string
  adresse:string
  email:string
  gerant:string
  pass:string
  listeNoir:boolean

  constructor(){
    this.id = 0;
    this.adresse= '';
    this.email = '';
    this.nomSociete = '';
    this.gerant = '';
    this.pass = '';
    this.listeNoir = false;
  }
}
