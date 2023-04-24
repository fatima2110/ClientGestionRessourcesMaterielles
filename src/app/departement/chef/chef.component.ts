import { Observable } from 'rxjs';
import { OrdinateurService } from '../../services/ordinateur.service';
import { BesoinImprimante } from '../../models/besoin-imprimante';
import { Component, OnInit } from '@angular/core';
import { Besoin } from '../../models/besoin';
import { BesoinService } from '../../services/besoin.service';
import { ImprimanteService } from '../../services/imprimante.service';
import { Ordinateur } from '../../models/ordinateur';
import { Imprimante } from '../../models/imprimante';
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
  idEnseignat: number;
  notif: number;
  title = 'Dashboard - Gestion des besoins';
  stitle = 'gerer-besoins';
  constructor(private besoinservice: BesoinService, private ordinateurService: OrdinateurService, private impriService: ImprimanteService) {
    this.besoinsImprimantes = [];
    this.besoinsOrdinateurs = [];
    this.idEnseignat = 0;
    this.notif = 0;

  }
  ngAfterViewInit(): void {
    /*$(document).ready(function() {
      $('#myTable').DataTable();
      $('.datatable').dataTable();
    });*/

    setTimeout(() => {
      $(document).ready(function () {
        $('#myTable').DataTable();
        //$('.datatable').dataTable();
      });
    }, 500);

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
          this.notif = 2;

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
          this.notif = 2;

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
  getImprimenteChef(besoinImprimente: BesoinImprimante) {
    this.besoinImprimente.id = besoinImprimente.id;
    this.besoinImprimente.resolution = besoinImprimente.resolution;
    this.besoinImprimente.vitesse = besoinImprimente.vitesse;
  }
  saveOrdinateurChef(ordinateur: Ordinateur) {
    this.ordinateurService.modifyBesoin(ordinateur).subscribe({
      next: (res) => {
        this.ngOnInit();
        this.notif = 1;

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
        this.notif = 1;

        // this.ngOnInit();
      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });
  }
  valider() {
    if (confirm("Vous arriver a valider les ordinateurs de votre departement")) {
      this.besoinsOrdinateurs.forEach(element => {
        this.besoinOrdinateur.id = element.id;
        this.besoinOrdinateur.ram = element.ram;
        this.besoinOrdinateur.cpu = element.cpu;
        this.besoinOrdinateur.disque = element.disque;
        this.besoinOrdinateur.ecran = element.ecran;
        this.ordinateurService.validerOrdinateur(this.besoinOrdinateur).subscribe({
          next: (res) => {
            this.ngOnInit();
            this.notif = 3;

            // this.ngOnInit();
          }, error: (err) => {
            alert("error")
            console.log(err)
          }
        });
      });
    }


  }
  validerImprimentes() {
    if (confirm("Vous arriver a valider les imprimentes de votre departement")) {
      this.besoinsImprimantes.forEach(element => {
        this.besoinImprimente.id = element.id;
        this.besoinImprimente.resolution = element.resolution;
        this.besoinImprimente.vitesse = element.vitesse;
        this.impriService.validerImprimente(this.besoinImprimente).subscribe({
          next: (res) => {
            this.ngOnInit();
            this.notif = 3;
            // this.ngOnInit();
          }, error: (err) => {
            alert("error")
            console.log(err)
          }
        });
      });
    }


  }
}

