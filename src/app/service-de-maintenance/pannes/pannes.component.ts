import { Component } from '@angular/core';
import { Imprimante } from 'src/app/models/imprimante';
import { Ordinateur } from 'src/app/models/ordinateur';
import { PanneImprimente } from 'src/app/models/panne-imprimente';
import { PanneOrdinateur } from 'src/app/models/panne-ordinateur';

@Component({
  selector: 'app-pannes',
  templateUrl: './pannes.component.html',
  styleUrls: ['./pannes.component.css']
})
export class PannesComponent {
  title : string = "";
  pannesOrdinateurs : PanneOrdinateur[]=[
    {"enseignant":"test1",
    "code_barre":"QZHDTYEAT746Z8",
    "cpu":"12 CPU",
    "disque":"128Go SSD",
    "ecran":"3840x2160 (Ultra HD ou 4K)",
    "marque":"HP",
    "ram":"16 GO"},
    {"enseignant":"test2",
    "code_barre":"QZHDTYEAT746Z8",
    "cpu":"12 CPU",
    "disque":"128Go SSD",
    "ecran":"3840x2160 (Ultra HD ou 4K)",
    "marque":"HP",
    "ram":"16 GO"}
  ];
  pannesImprimentes : PanneImprimente[]=[];

  notif: number;
  showOrdinateur = true;
  selectedDate!: string;

  newOrdinateur = new Ordinateur();
  newImprimante = new Imprimante();

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
    
  }

  materielRepare(){
    console.log("materielRepare");
  }

}
