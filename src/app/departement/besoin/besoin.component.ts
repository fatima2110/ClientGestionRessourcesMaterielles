import { Besoin } from '../../models/besoin';
import { Component, OnInit } from '@angular/core';
import { Ordinateur } from '../../models/ordinateur';
import { Imprimante } from '../../models/imprimante';
import { OrdinateurService } from '../../services/ordinateur.service';
import { ImprimanteService } from '../../services/imprimante.service';
import { MessagerieService } from 'src/app/pages/responsbale/Services/messagerie.service';
import { AuthService } from 'src/app/services/AuthService';
declare var $: any;

@Component({
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrls: ['./besoin.component.css']
})
export class BesoinComponent implements OnInit {
  isChef = false;
  showOrdinateur = true;
  newOrdinateur = new Ordinateur();
  newImprimante = new Imprimante();
  oldImprimante = new Imprimante();
  oldOrdinateur = new Ordinateur();
  besoinsOrdinateurs: Ordinateur[];
  besoinsImprimentes: Imprimante[];
  title = 'Dashboard - Mes besoins';
  notif: number;
  stitle = 'ajouter-modifier-supprimer-mes besoins';

  constructor(private ordinateurService: OrdinateurService, private imprimanteService: ImprimanteService, private msgService: MessagerieService, private authService: AuthService) {
    this.besoinsOrdinateurs = [];
    this.besoinsImprimentes = [];
    this.notif = 0;
    if (this.authService.getRole() == "CHEF_DEPARTEMENT") {
      this.isChef = true;
    }
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
  saveOrdinateur() {
    this.ordinateurService.addOrdinateur(this.newOrdinateur).subscribe({
      next: (res) => {
        this.ngOnInit();
        if (this.newOrdinateur.id != 0)
          this.notif = 1;
        else
          this.notif = 3;
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
        if (this.newImprimante.id != 0)
          this.notif = 1;
        else
          this.notif = 3;


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
    this.newImprimante = i;

  }
  getOrdinateur(besoinOrdinateur: Ordinateur): void {
    console.log(besoinOrdinateur);
    this.newOrdinateur = besoinOrdinateur;
  }
  deleteBesoinOrdinateur(i: number): void {
    this.ordinateurService.deleteBesoin(i).subscribe({
      next: (res) => {

        this.ngOnInit();
        this.notif = 2;

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
        this.notif = 2;

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
  notifier() {
    const id_emett = this.authService.getId();

    this.msgService.notifier(id_emett);
    this.notif = 9;


  }
}
