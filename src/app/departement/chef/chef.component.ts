import { OrdinateurService } from './../besoin/ordinateur.service';
import { BesoinImprimante } from './besoin-imprimante';
import { Component, OnInit } from '@angular/core';
import { Besoin } from './besoin';
import { BesoinService } from './besoin.service';
import { ImprimanteService } from '../besoin/imprimante.service';
import { Ordinateur } from '../besoin/ordinateur';
import { Imprimante } from '../besoin/imprimante';
declare var $: any;

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  showOrdinateur = true;
  besoinsOrdinateurs: Besoin[];
  besoinsImprimantes: BesoinImprimante[];
  besoinOrdinateur = new Ordinateur();
  besoinImprimente = new Imprimante();
  constructor(private besoinservice: BesoinService, private ordinateurService: OrdinateurService, private impriService: ImprimanteService) {
    this.besoinsImprimantes = [];
    this.besoinsOrdinateurs = [];
  }
  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('#myTable').DataTable();
      $('.datatable').dataTable();
    });
  }
  onOptionSelected(value: any) {
    if (value.value == 2) {
      this.showOrdinateur = false;
    } else {
      this.showOrdinateur = true;

    }
  }
  ngOnInit(): void {
    this.besoinservice.getBesoinsOrdinateurs().subscribe({
      next: (res) => {
        this.besoinsOrdinateurs = res;
        // this.ngOnInit();
      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });
    this.besoinservice.getBesoinsImprimates().subscribe({
      next: (res) => {
        this.besoinsImprimantes = res;
        // this.ngOnInit();
      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });
  }
  confirmerDeleteImprimante(besoin: BesoinImprimante): void {
    if (confirm("vous etes sur de supprimer " + besoin.resolution + "de monsieur " + besoin.nom + " " + besoin.prenom + " ?"))
      this.impriService.deleteBesoin(besoin.id).subscribe({
        next: (res) => {
          this.ngOnInit();
          // this.ngOnInit();
        }, error: (err) => {
          alert("error")
          console.log(err)
        }
      });;
  }
  confirmerDeleteOrdinateurChef(besoin: Besoin): void {
    if (confirm("vous etes sur de supprimer " + besoin.cpu + "de monsieur " + besoin.nom + " " + besoin.prenom + " ?"))
      this.ordinateurService.deleteBesoin(besoin.id).subscribe({
        next: (res) => {
          this.ngOnInit();
          // this.ngOnInit();
        }, error: (err) => {
          alert("error")
          console.log(err)
        }
      });
  }
  getOrdinateurChef(besoin: Besoin) {
    this.besoinOrdinateur.id = besoin.id;
    this.besoinOrdinateur.ram = besoin.ram;
    this.besoinOrdinateur.cpu = besoin.cpu;
    this.besoinOrdinateur.disque = besoin.disque;
    this.besoinOrdinateur.ecran = besoin.ecran;
  }
  getImprimenteChef(besoinImprimente:BesoinImprimante){
    this.besoinImprimente.id=besoinImprimente.id;
    this.besoinImprimente.resolution=besoinImprimente.resolution;
    this.besoinImprimente.vitesse=besoinImprimente.vitesse;
  }
  saveOrdinateurChef(ordinateur: Ordinateur) {
    this.ordinateurService.modifyBesoin(ordinateur).subscribe({
      next: (res) => {
        this.ngOnInit();
        // this.ngOnInit();
      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });
  }
  saveImprimenteChef(imprimente: Imprimante) {
    this.impriService.modifyBesoin(imprimente).subscribe({
      next: (res) => {
        this.ngOnInit();
        // this.ngOnInit();
      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });
  }
}
