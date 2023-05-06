import { Component } from '@angular/core';
import { OrdinateurDTO } from 'src/app/Classes/OrdinateurDTO';
import { ImprimenteDTO} from 'src/app/Classes/ImprimenteDTO';
import {EnregistererMatService} from './enregisterer-mat.service';
import { v4 as uuidv4 } from 'uuid';

import { BarcodeFormat } from '@zxing/library';
@Component({
  selector: 'app-enregisterer-mat',
  templateUrl: './enregisterer-mat.component.html',
  styleUrls: ['./enregisterer-mat.component.css']
})
export class EnregistererMatComponent {

  ordinateur: OrdinateurDTO[] = [];
  codeBarreImages: string[] = [];
  imprimantes: ImprimenteDTO[] = [];
  selectedImprimantes: ImprimenteDTO[] = [];
  selectedOrdinateur: OrdinateurDTO[] = [];


  constructor( private service:EnregistererMatService)
  {
this.service.getImprimantes().subscribe((imprimantes: ImprimenteDTO[]) => {

  this.imprimantes = imprimantes;
  for (let i = 0; i < this.imprimantes.length; i++) {
    this.generateBarcodeIm(this.imprimantes[i]);
    console.log(this.ordinateur[i])
  }
});

this.service.getOrdinateurs().subscribe({
  next: (res) => {
    this.ordinateur= res;
    for (let i = 0; i < this.ordinateur.length; i++) {
      this.generateBarcode(this.ordinateur[i]);
      console.log(this.ordinateur[i])
    }


  },
  error: (err) => {
    alert("Erreur");
    console.log(err);
  }
});
}
generateBarcode(ordinateur: OrdinateurDTO) {
  const barcodeValue = uuidv4();
  console.log("code barre :");
  console.log(barcodeValue);
  ordinateur.code_barre=barcodeValue;
  // Génère un UUID unique
  ordinateur.code_barre_img= `https://barcode.tec-it.com/barcode.ashx?data=${barcodeValue}&code=Code128&dpi=96`;

}
generateBarcodeIm(imprimente: ImprimenteDTO) {
  const barcodeValue = uuidv4();
  console.log("code barre :");
  console.log(barcodeValue);
  imprimente.code_barre=barcodeValue;
  // Génère un UUID unique
imprimente.code_barre_img= `https://barcode.tec-it.com/barcode.ashx?data=${barcodeValue}&code=Code128&dpi=96`;

}



  editIndex = -1;



  //pour l'affichage des modal
  edit = false;
  sauvgerderEchec=false;
  afficherModele1(index:number) {
    this.edit = true;
    this.editIndex=index
  }
  afficherModele2() {
    this.edit = true;
  }
  cacherModele() {
    this.edit = false;

  }
  afficherModele4() {
    this.sauvgerderEchec = true;
  }
  cacherModele4() {
    this.sauvgerderEchec = false;

  }
  //Recuper L'indice de imprimente
  getIndice(ref1: any,ref2: any)
  {
    if( ref1.value  && ref2.value)
    {
      for (let i = 0; i < this.imprimantes.length; i++) {
      if(i==this.editIndex)
      {
        alert(this.editIndex)
        this.imprimantes[i].datelivraison= ref2.value.split("/").reverse().join("-");
        this.imprimantes[i].dureegarantie=ref1.value;

      }

    }
    for (let i = 0; i < this.ordinateur.length; i++) {
      if(i==this.editIndex)
      {
        this.ordinateur[i].datelivraison=ref2.value.split("/").reverse().join("-");
        this.ordinateur[i].dureegarantie=ref1.value;


      }

    }


    this.cacherModele();
    }



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

      }
    });
  }
  genererListF(imprimante: ImprimenteDTO): void {
    const index = this.selectedImprimantes.indexOf(imprimante);
    if (index === -1) {
      this.selectedImprimantes.push(imprimante);
      console.log(imprimante)
    } else {
      this.selectedImprimantes.splice(index, 1);
    }
    console.log(this.selectedImprimantes)

  }
  genererListFor(ordinateur:OrdinateurDTO ): void {
    const index = this.selectedOrdinateur.indexOf(ordinateur);
    if (index === -1) {
      console.log(ordinateur)
      this.selectedOrdinateur.push(ordinateur);
    } else {
      this.selectedOrdinateur.splice(index, 1);
    }
    console.log(this.selectedOrdinateur)

  }
   initialiser(ref1: any,ref2: any){

      ref1.value = "";
      ref2.value = "";
    }
    //pour l'affichage des modal
  modeleAppeleOffre = false;

  afficherModele() {

    this.sauvegarder();
    this.modeleAppeleOffre = true;

  }
  cacherModele1() {
    this.modeleAppeleOffre = false;
  }
  modeleGenerationSucces = false;
//pour afficher le message de succes
  afficherModele3() {
    this. modeleAppeleOffre = false;
    this.modeleGenerationSucces = true;

    this.sauvegarder();
  }
  cacherModele3() {
    this.modeleGenerationSucces= false;
  }
  cacherModele8() {
    this.test1= false;
  }
  sauvegarder() {
    this.service.save(this.selectedImprimantes).subscribe(() => {
      console.log('Les imprimantes ont été sauvegardées avec succès !');
    });
    this.service.saveOm(this.selectedOrdinateur).subscribe(() => {
      console.log('Les imprimantes ont été sauvegardées avec succès !');
    });
  }
  test1=false;
  //Enregistrer Mat
  EnregistrerMat()
  {
    if(this.selectedImprimantes.length === 0 && this.selectedOrdinateur.length === 0)
    this.test1=true;
    else{
       let isFieldEmpty = false;

for (let i = 0; i < this.selectedImprimantes.length; i++) {
  if ( this.selectedImprimantes[i].datelivraison === null|| this.selectedImprimantes[i].dureegarantie === null) {
    isFieldEmpty = true;
    break;
  }

}
for (let i = 0; i < this.selectedOrdinateur.length; i++) {
  if ( this.selectedOrdinateur[i].datelivraison === null|| this.selectedOrdinateur[i].dureegarantie === null) {
    isFieldEmpty = true;
    break;
  }

}
if (isFieldEmpty) {

this.afficherModele4();

} else {

  // continuer le traitement


  this.afficherModele()
}}


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
