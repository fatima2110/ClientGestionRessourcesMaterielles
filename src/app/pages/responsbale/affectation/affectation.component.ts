import { AffectationDto } from './../../../DTO/AffectationDto';
import { Ensiegnant } from './../../../modules/Ensiegnant';

import { Component, OnInit } from '@angular/core';
import { AffectationService } from '../Services/Affectation.service';
import { Affectation } from 'src/app/modules/Affectation';
import { Materiel } from 'src/app/modules/Materiel';
declare var $: any;

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {

  title = "Gestion des Affectations";
  stitle = "gerer les affectations";
  showAffected = true;
  affectations: any;
  materiels: any;
  //affectation: Affectation;
  // ensiegnant: EnsiegnantAffectation;
  ensiegnants: Ensiegnant[];
  materielPorter: Materiel;
  affictationPorter: Affectation;
  constructor(private affeService: AffectationService) {
    //this.affectation = new Affectation();
    // this.ensiegnant = new EnsiegnantAffectation();
    this.materielPorter = new Materiel();
    this.affictationPorter = new Affectation();
    this.ensiegnants=[];
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
      this.showAffected = false;
    } else {
      this.showAffected = true;

    }
  }
  retirerRessourceAffecte(id: number): void {
    if (confirm("Vous etes sur ?")) {
      this.affeService.retirerRessourceAffecte(id).subscribe(
        (res) => { this.ngOnInit() },
        (err) => { console.log(err) }
      );


    }
  }
  retirerRessourceNonAffecte(id: number): void {
    if (confirm("Vous etes sur ? car ce materiel sera eliminer <strong>defenitivement!!?</strong>")) {
      this.affeService.retirerRessourceNonAffecte(id).subscribe(
        (res) => { this.ngOnInit() },
        (err) => { console.log(err) }
      );

    }
  }
  getMateriel(mate: Materiel) {
    // this.materielPorter = { ...mate };
    this.materielPorter = mate;
    this.affeService.getAllEnsOfDepart(mate.ensiegnant.departement).subscribe(
      (res) => { this.ensiegnants = res; console.log(this.ensiegnants); },
      (err) => { console.log(err) }
    );

  }
  getAffectation(affectation:Affectation){
    this.affictationPorter = affectation;
    alert(affectation.departement)
    this.affeService.getAllEnsOfDepart(affectation.departement).subscribe(
      (res) => { this.ensiegnants = res; console.log(this.ensiegnants); },
      (err) => { console.log(err) }
    );
  }
  affecterRessource(mate: Materiel): void {

    const aff = new AffectationDto();
    // const ensiegnant = this.ensiegnants.find(e => e.id === this.materielPorter.ensiegnant.id);
    // this.materielPorter.ensiegnant = ensiegnant;
    aff.id_enseignant = this.materielPorter.ensiegnant.id;
    aff.id_materiel = mate.id;
    aff.date_affecatation = new Date();
    aff.departement = this.materielPorter.ensiegnant.departement;
    console.log(aff);
    console.log(mate);
    this.affeService.addAffectaion(aff).subscribe(
      (res) => { this.ngOnInit(); },
      (err) => { console.log(err) }
    );
  }
  modifyAffctation(affectation:Affectation){
    const aff = new AffectationDto();
    aff.id=affectation.id;
    aff.departement=affectation.departement;
    aff.id_enseignant=affectation.ensiegnantAff.id;
    aff.id_materiel=affectation.materiel.id;
    aff.date_affecatation=affectation.date_affectation;
    this.affeService.addAffectaion(aff).subscribe(
      (res) => { this.ngOnInit(); },
      (err) => { console.log(err) }
    );
  }
  onDepartementSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const departement = target.value;
    // alert(this.materielPorter.ensiegnant.id)
    //alert(departement)
    this.affeService.getAllEnsOfDepart(departement).subscribe(
      (res) => { this.ensiegnants = res; console.log(this.ensiegnants); },
      (err) => { console.log(err) }
    );
  }


  ngOnInit(): void {
    this.affeService.getAffectations().subscribe(
      (res) => { this.affectations = res; console.log(this.affectations); },
      (err) => { console.log(err) }
    );
    this.affeService.getNonAffectations().subscribe(
      (res) => { console.log("response : ",res) ;this.materiels = res; console.log(this.materiels); },
      (err) => { console.log(err) }
    );
  }
}
