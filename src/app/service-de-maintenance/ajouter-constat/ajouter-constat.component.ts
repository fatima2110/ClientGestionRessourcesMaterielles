import { Component } from '@angular/core';
import { Constat } from 'src/app/models/constat';
import { Imprimante } from 'src/app/models/imprimante';
import { Ordinateur } from 'src/app/models/ordinateur';

@Component({
  selector: 'app-ajouter-constat',
  templateUrl: './ajouter-constat.component.html',
  styleUrls: ['./ajouter-constat.component.css']
})
export class AjouterConstatComponent {
  title = 'Dashboard - Ajouter Constat';
  notif: number;
  showOrdinateur = true;
  
  newConstat = new Constat();

  constructor(){
    this.notif=0;
  }

  onOptionSelected(value: any) {
    if (value.value == 2) {
      this.showOrdinateur = false;
    } else {
      this.showOrdinateur = true;

    }
  }

  saveConstat(){
    console.log(this.newConstat.code_barre);
    console.log(this.newConstat.date_apparition);
    console.log(this.newConstat.explication_panne);
    console.log(this.newConstat.frequence);
    console.log(this.newConstat.ordre);
  }

}
