import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constat } from 'src/app/models/constat';
import { Imprimante } from 'src/app/models/imprimante';
import { Ordinateur } from 'src/app/models/ordinateur';
import { PanneService } from 'src/app/services/PannesService';

@Component({
  selector: 'app-ajouter-constat',
  templateUrl: './ajouter-constat.component.html',
  styleUrls: ['./ajouter-constat.component.css']
})
export class AjouterConstatComponent implements OnInit{
  title = 'Dashboard - Ajouter Constat';
  notif: number;
  errorMsg!:string;
  showOrdinateur = true;
  code_barre:string = "";
  
  newConstat = new Constat();

  constructor(private route: ActivatedRoute, private panneService:PanneService){
    this.notif=0;
  }
  ngOnInit(): void {
    const data = window.history.state;
    this.code_barre = data.code;
    this.showOrdinateur = data.showOrdinateur;
  }

  saveConstat(){
    this.newConstat.code_barre=this.code_barre;
    this.panneService.ajouterConstat(this.newConstat).subscribe({
      next:(resp)=>{console.log(resp);this.clear();this.notif=1;},
      error:(err)=>{
        const codeError = err.status;
        if(codeError === 404){
          this.clear();
          this.errorMsg= "le materiel n'existe pas";
        }
        console.log(err);
        }
    });
  }
  clear(){
    this.newConstat = new Constat();
    this.code_barre = '';
  }

}
