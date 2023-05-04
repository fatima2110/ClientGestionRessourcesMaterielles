
import { Component } from '@angular/core';
import {BesoinService} from './besoin.service';
import {Imprimente} from '../Classes/Imprimente'
import {Ordinateur} from '../Classes/Ordinateur'

@Component({
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrls: ['./besoin.component.css']
})

export class BesoinComponent {
  imprimantes: Imprimente[] = [];
  ordinateurs: Ordinateur[] = [];
  /////pour Recuperer les Besoins////////////////
  constructor(private dataService: BesoinService) {
    dataService.getImprimantes().subscribe((imprimantes: Imprimente[]) => {
      this.imprimantes = imprimantes;
  });
  dataService.getOrdinateurs().subscribe((ordinateurs: Ordinateur[])=>{
    this.ordinateurs=ordinateurs;
  });

  }


  //pour la recherche

  myFunction() {
    // Declare variables
    let input = document.getElementById("myInput") as HTMLInputElement;
let filter: string;
let table = document.getElementById("myTable") as HTMLTableElement;
let tr = Array.from(table.getElementsByTagName("tr")) as HTMLTableRowElement[];
let td: HTMLTableCellElement;
let i: number;
let txtValue: string;
const noResultsMessage = document.getElementById("noResultsMessage");

    filter = input.value.toUpperCase();


    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      if (noResultsMessage) {
        noResultsMessage.style.display = "none";
      }
      // Exclude the table header from the search
      if (tr[i].getElementsByTagName("td").length > 0) {
        // Loop through all table cells in this row
        for (let j = 0; j < tr[i].getElementsByTagName("td").length; j++) {
          td = tr[i].getElementsByTagName("td")[j];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
              if (noResultsMessage) {
                noResultsMessage.style.display = "none";
              }
              break; // Exit the loop if a cell matches the search
            } else {
              tr[i].style.display = "none";
              if (noResultsMessage) {
                noResultsMessage.style.display = "";
              }
            }
          }
        }
      }
    }
  }

}
