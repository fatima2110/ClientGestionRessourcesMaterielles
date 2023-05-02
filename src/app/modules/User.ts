export enum Role{
  'USER',
  'RESPONSABLE',
  'ENSEIGNANT',
  'CHEF_DEPARTEMENT',
  'FOURNISSEUR',
  'TECHNICIEN'
}
export class User {
  id:number;


    login:string;

    nom:string;

    pass:string;

    photo_profile:string;

    prenom:string;

    role:Role;

    telephone:string;
constructor(){
  this.id=0;
  this.login='';
  this.nom='';
  this.pass='';
  this.photo_profile='';
  this.prenom='';
  this.role=Role.USER;
  this.telephone='';
}
}
