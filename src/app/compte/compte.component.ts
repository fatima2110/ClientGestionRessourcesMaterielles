import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  compte = new Register();
  comptes: Register[] = [];
  editMode = false;
  succes = 0;
  dept: string = '';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    const str = this.auth.getId();
    let idUser: number = 0;
    if (str != null) {
      idUser = parseInt(str, 10);
    }
    this.auth.getDepartement(idUser).subscribe((response: any) => {
      this.dept = response.departement;
      //console.log('Nouvelle valeur de dept:', this.dept);
      this.auth.getAllEnseignants(this.dept).subscribe({
        next: (res) => {
          this.comptes = res;
        },
        error: (err) => {
          alert("error");
          console.log(err);
        }
      });
    });
  }

  cancel() {
    this.compte = new Register();
    this.comptes = [];
    this.ngOnInit();
  }
  

  createCompte() {
    const str = this.auth.getId();
    let idUser: number = 0;
    if (str != null) {
      idUser = parseInt(str, 10);
    }
    this.auth.getDepartement(idUser).subscribe((response: any) => {
      this.dept = response.departement;
      this.compte.departement=this.dept;
      const role = this.auth.getRole();
      
      if( role === "CHEF_DEPARTEMENT"){
        this.compte.setRole("ENSEIGNANT");
      }
      if( role === "RESPONSABLE" ){
        // ajout de boite de selection pour determiner le type de compte a ajouter : ENSEIGNANT ou TECHNECIEN 
      }
      
      this.auth.register(this.compte).subscribe({
        next: (res) => {
          this.succes = 1;
          this.cancel();
        }, error: (err) => {
          this.succes = 3
          alert("error")
          console.log(err)
          this.cancel();
        }
      });
    });
  }

  getCompte(c: Register) {
    this.editMode = true;
    this.compte = c;
  }
  annuler(){
    this.editMode = false;
    this.compte = new Register();
  }
  editCompte(){
    const str = this.auth.getId();
    let idUser: number = 0;
    if (str != null) {
      idUser = parseInt(str, 10);
    }
    this.auth.getDepartement(idUser).subscribe((response: any) => {
      this.dept = response.departement;
      //console.log('Nouvelle valeur de dept:', this.dept);
      this.compte.departement=this.dept;
      console.log("ici",this.compte);
      this.auth.editCompte(this.compte.id, this.compte).subscribe({
        next: (res) => {
          this.succes = 2;
          this.cancel();
        }, error: (err) => {
          const errorCode = err.status;
          if (errorCode === 403) {
            alert('mot de passe incorrect')
            console.log('mot de passe incorrect');
          }
          this.succes = 3
          console.log(err)
          this.cancel();
        }
      });
    });
  }
  
  confirmerDeleteCompte(compte: string, idCompte: number) {
    if (confirm("vous etes sur de supprimer " + compte + " ?"))
      this.deleteCompte(idCompte);
  }
  deleteCompte(idCompte: number) {
    this.auth.deleteCompte(idCompte).subscribe({
      next:(resp)=>{
        console.log(resp);
        this.succes = 4;
        this.cancel();
      },error:(err)=>{
        console.log(err);
        this.succes = 5;
        this.cancel();
      }
    });
  }
}

