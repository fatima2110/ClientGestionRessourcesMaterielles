import { Component } from '@angular/core';
import { ImprimenteDTO } from 'src/app/Classes/ImprimenteDTO';
import { OrdinateurDTO } from 'src/app/Classes/OrdinateurDTO';
import { GestionRessourcesService } from './gestion-ressources.service';

@Component({
  selector: 'app-gestion-ressources',
  templateUrl: './gestion-ressources.component.html',
  styleUrls: ['./gestion-ressources.component.css']
})
export class GestionRessourcesComponent {
  ordinateur: OrdinateurDTO[] = [];
  imprimantes: ImprimenteDTO[] = [];
  constructor( private service:GestionRessourcesService)
  {
this.service.getImprimantes().subscribe((imprimantes: ImprimenteDTO[]) => {

  this.imprimantes = imprimantes;

});

this.service.getOrdinateurs().subscribe({
  next: (res) => {
    console.log(res)
    this.ordinateur= res;



  },
  error: (err) => {
    alert("Erreur");
   alert(err);
  }
});
}

editIndex = -1;



  //pour l'affichage des modal
  edit = false;
  sauvgerderEchec=false;
  type:string="";
  afficherModele1(index:number,text:string) {
    this.edit = true;
    this.editIndex=index
    this.type=text;
  }

  cacherModele() {
    this.edit = false;

  }
  suprimmer()
  {
     this.cacherModele();
   
     if(this.type=='imprimente')
     {
       this.service.suprimmerIm(this.editIndex).subscribe(() => {
      console.log('Les imprimantes ont été suprimee avec succès !');
    });
     }
     else{
      this.service.suprimmerOr(this.editIndex).subscribe(() => {
        console.log('Les ordinateur ont été suprimee avec succès !');
     });


  }
  this.service.getImprimantes().subscribe((imprimantes: ImprimenteDTO[]) => {

    this.imprimantes = imprimantes;

  });

  this.service.getOrdinateurs().subscribe({
    next: (res) => {
      this.ordinateur= res;



    },
    error: (err) => {
      alert("Erreur");
      console.log(err);
    }
  });
}
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
