import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imprimante } from 'src/app/models/imprimante';
import { Ordinateur } from 'src/app/models/ordinateur';
import { PanneImprimente } from 'src/app/models/panne-imprimente';
import { PanneOrdinateur } from 'src/app/models/panne-ordinateur';
import { PanneService } from 'src/app/services/PannesService';

@Component({
  selector: 'app-pannes',
  templateUrl: './pannes.component.html',
  styleUrls: ['./pannes.component.css']
})
export class PannesComponent implements OnInit{
  title : string = "";
  pannesOrdinateurs : PanneOrdinateur[]= []; /*[
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
  ];*/
  pannesImprimentes : PanneImprimente[]=[];

  notif: number;
  showOrdinateur = true;
  selectedDate!: string;

  newOrdinateur = new Ordinateur();
  newImprimante = new Imprimante();

  constructor(private panne:PanneService, private router: Router){
    this.notif=0;
  }
  ngOnInit(): void {
    this.panne.getOrdinateurEnPanne().subscribe({
      next:(resp)=>{
        this.pannesOrdinateurs = resp;
      }, error:(err)=>{console.log(err);}
    });
    this.panne.getImprimenteEnPanne().subscribe({
      next:(resp)=>{
        this.pannesImprimentes = resp;
      }, error:(err)=>{console.log(err);}
    });
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

  redigerConstat(code_barre:string){
    const data = { code:  code_barre, showOrdinateur: this.showOrdinateur};
    this.router.navigate(['/service-de-maintenance/constat'], { state: data });
  }

}
