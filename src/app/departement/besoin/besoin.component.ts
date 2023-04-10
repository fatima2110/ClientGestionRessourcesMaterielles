import { Besoin } from './../chef/besoin';
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
  oldImprimante = new Imprimante();
  oldOrdinateur = new Ordinateur();
  besoinsOrdinateurs: Ordinateur[];
  besoinsImprimentes: Imprimante[];
  constructor(private ordinateurService: OrdinateurService, private imprimanteService: ImprimanteService) {
    this.besoinsOrdinateurs = [];
    this.besoinsImprimentes = [];
  }
  onOptionSelected(value: any) {
    if (value.value == 2) {
      this.showOrdinateur = false;
    } else {
      this.showOrdinateur = true;

    }
  }
  saveOrdinateur() {
    this.ordinateurService.addOrdinateur(this.newOrdinateur).subscribe({
      next: (res) => {
this.ngOnInit();
      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });

  }
  saveImprimante() {
    this.imprimanteService.addImprimante(this.newImprimante).subscribe({
      next: (res) => {
        this.ngOnInit();
      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });
  }
  ngOnInit(): void {
    this.ordinateurService.getAllBesoins().subscribe({
      next: (res) => {

        this.besoinsOrdinateurs = res;
      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });

    this.imprimanteService.getAllBesoins().subscribe({
      next: (res) => {

        this.besoinsImprimentes = res;
      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });
  }

  getImprimante(i: Imprimante): void {
    this.newImprimante=i;

  }
  getOrdinateur(besoinOrdinateur: Ordinateur): void {
    console.log(besoinOrdinateur);
   this.newOrdinateur=besoinOrdinateur;
  }
  deleteBesoinOrdinateur(i: number): void {
    this.ordinateurService.deleteBesoin(i).subscribe({
      next: (res) => {

       this.ngOnInit();
      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });
  }
  confirmerDeleteOrdinateur(mat: string, i: number) {
    if (confirm("vous etes sur de supprimer " + mat + " ?"))
      this.deleteBesoinOrdinateur(i);
  }
  deleteBesoinImprimante(i: number): void {
    this.imprimanteService.deleteBesoin(i).subscribe({
      next: (res) => {

       this.ngOnInit();
      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });
  }
  confirmerDeleteImprimante(mat: string, i: number) {
    if (confirm("vous etes sur de supprimer " + mat + " ?"))
      this.deleteBesoinImprimante(i);
  }
}
