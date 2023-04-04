import { Component, OnInit } from '@angular/core';
import { Ordinateur } from './ordinateur';
import { Imprimante } from './imprimante';
import { OrdinateurService } from './ordinateur.service';
import { ImprimanteService } from './imprimante.service';

@Component({
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrls: ['./besoin.component.css']
})
export class BesoinComponent implements OnInit {
  showOrdinateur = true;
  newOrdinateur = new Ordinateur();
  newImprimante = new Imprimante();
  constructor(private ordinateurService: OrdinateurService, private imprimanteService: ImprimanteService) { }
  onOptionSelected(value: any) {
    if (value.value == 2) {
      this.showOrdinateur = false;
    } else {
      this.showOrdinateur = true;

    }
  }
  saveOrdinateur(): void {
    this.ordinateurService.addOrdinateur(this.newOrdinateur);

  }
  saveImprimante(): void {
    this.imprimanteService.addImprimante(this.newImprimante);
   }
  ngOnInit(): void {

  }

  deleteBesoinOrdinateur(i:number):void{
    this.ordinateurService.deleteBesoin(i);
  }
  confirmerDeleteOrdinateur(mat:string,i:number) {
    if(confirm("vous etes sur de supprimer "+mat +" ?"))
    this.deleteBesoinOrdinateur(i);
  }
  deleteBesoinImprimante(i:number):void{
    this.imprimanteService.deleteBesoin(i);
  }
  confirmerDeleteImprimante(mat:string,i:number) {
    if(confirm("vous etes sur de supprimer"+mat +" ?"))
    this.deleteBesoinImprimante(i);
  }
}
