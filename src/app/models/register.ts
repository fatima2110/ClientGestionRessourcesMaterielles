export enum Role {
    USER,
    RESPONSABLE,
    ENSEIGNANT,
    CHEF_DEPARTEMENT,
    FOURNISSEUR,
    TECHNICIEN
 
  }
export class Register {
    id:number;
    login:string;
    role!:Role;
    password:string;
    nom:string;
    prenom:string;
    telephone:string;
    departement:string;
    photo:string;
    constructor(){
        this.id = 0;
        this.login='';
        this.password='';
        this.nom='';
        this.prenom='';
        this.telephone='';
        this.departement='';
        this.photo='';

    }
    setDepartement(departement:string){
        this.departement=departement;
    }

    setRole(role:string){
        switch(role){
            case 'ENSEIGNANT':
                this.role=Role.ENSEIGNANT;
                break;
            case 'CHEF_DEPARTEMENT':
                this.role=Role.CHEF_DEPARTEMENT;
                break;
            case 'FOURNISSEUR':
                this.role=Role.FOURNISSEUR;
                break;
            case 'TECHNICIEN':
                this.role=Role.TECHNICIEN;
                break;
            default:
                break;
        }
       
    }
 
}

