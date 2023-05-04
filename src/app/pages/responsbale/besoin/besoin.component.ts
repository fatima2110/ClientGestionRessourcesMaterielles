

import { Component, OnInit } from '@angular/core';
import { ImprimenteDTO} from 'src/app/Classes/ImprimenteDTO';
import { BesoinService } from './besoin.service';
import { OrdinateurDTO } from 'src/app/Classes/OrdinateurDTO';




@Component({
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrls: ['./besoin.component.css']
})
export class BesoinComponent  {
  ordinateur: OrdinateurDTO[] = [];

  imprimantes: ImprimenteDTO[] = [];
  selectedImprimantes: ImprimenteDTO[] = [];
  selectedOrdinateur: OrdinateurDTO[] = [];


  constructor( private service:BesoinService)
  {



  }
  ngOnInit(): void {
    console.log("on va aficher la list pour enregistrer")
    this.service.getImprimantes().subscribe((imprimantes: ImprimenteDTO[]) => {

        this.imprimantes = imprimantes;
        console.log(imprimantes)
      });
      this.service.getOrdinateurs().subscribe((Ordinateur:OrdinateurDTO[]) => {
        this.ordinateur =Ordinateur;
      });
  }
  genererListF(imprimante: ImprimenteDTO): void {
    const index = this.selectedImprimantes.indexOf(imprimante);
    if (index === -1) {
      this.selectedImprimantes.push(imprimante);
    } else {
      this.selectedImprimantes.splice(index, 1);
    }
    console.log(this.selectedImprimantes)

  }
  toggleSelectAll(event: any) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox: any) => {
      checkbox.checked = event.target.checked;
      // Vérifier l'état de chaque case à cocher et exécuter une fonction en conséquence
      if (checkbox.checked) {

        this.selectedImprimantes=this.imprimantes;
        this.selectedOrdinateur=this.ordinateur;
        console.log(this.selectedImprimantes)
        console.log(this.selectedOrdinateur)

      } else {
        this.selectedImprimantes=[];
        this.selectedOrdinateur=[];
        console.log(this.selectedImprimantes)
        console.log(this.selectedOrdinateur)
      }
    });
  }









  genererListFor(ordinateur:OrdinateurDTO ): void {
    const index = this.selectedOrdinateur.indexOf(ordinateur);
    if (index === -1) {
      this.selectedOrdinateur.push(ordinateur);
    } else {
      this.selectedOrdinateur.splice(index, 1);
    }
    console.log(this.selectedOrdinateur)

  }



  //pour l'affichage des modal
  modeleAppeleOffre = false;
  test=false;

  afficherModele1() {
    if(this.selectedImprimantes.length === 0 && this.selectedOrdinateur.length === 0)
    this.test=true;
    else
    this.modeleAppeleOffre = true;
  }
  cacherModele() {
    this.modeleAppeleOffre = false;
  }

  cacherModele1() {
    this.test = false;
  }
  initialiser(ref: any,ref1: any){
    ref.value = "";
    ref1.value = "";

  }
  modeleGenerationSucces = false;
//pour afficher le message de succes


sauvegarder() {
  this.service.save(this.selectedImprimantes).subscribe(() => {
    console.log('Les imprimantes ont été sauvegardées avec succès !');
  });
  this.service.saveOrd(this.selectedOrdinateur).subscribe(() => {
    console.log('Les imprimantes ont été sauvegardées avec succès !');
  });
this.ngOnInit()

}
//generer Nouvelle apple d'offre
count=0;
genrerNouvelle(ref:any,ref1:any)
{
  this.cacherModele();
  if(ref.value && ref1.value)
  {
 for(let i=0;i<this.selectedImprimantes.length;i++)
  {

    this.selectedImprimantes[i].datedebut=ref.value.split("/").reverse().join("-");
    this.selectedImprimantes[i].dateFin=ref1.value.split("/").reverse().join("-");

  }
  for(let i=0;i<this.selectedOrdinateur.length;i++)
  {

    this.selectedOrdinateur[i].datedebut=ref.value.split("/").reverse().join("-");
    this.selectedOrdinateur[i].dateFin=ref1.value.split("/").reverse().join("-");

  }

  this.sauvegarder();

  }



}
  //pour la recherche///

  myFunction() {
    // Declare variables
    let input = document.getElementById("myInput") as HTMLInputElement;
let filter: string;
let table = document.getElementById("myTable") as HTMLTableElement;
let tr = Array.from(table.getElementsByTagName("tr")) as HTMLTableRowElement[];
let td: HTMLTableCellElement;
let i: number;
let txtValue: string;


    filter = input.value.toUpperCase();


    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {

      // Exclude the table header from the search
      if (tr[i].getElementsByTagName("td").length > 0) {
        // Loop through all table cells in this row
        for (let j = 0; j < tr[i].getElementsByTagName("td").length; j++) {
          td = tr[i].getElementsByTagName("td")[j];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";

              break; // Exit the loop if a cell matches the search
            } else {
              tr[i].style.display = "none";

            }
          }
        }
      }
    }
  }


}

