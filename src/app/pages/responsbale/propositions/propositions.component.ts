import { Component } from '@angular/core';
import { ImprimenteDTO } from 'src/app/Classes/ImprimenteDTO';
import { OrdinateurDTO } from 'src/app/Classes/OrdinateurDTO';
import { PropositionService } from 'src/app/pages/responsbale/Services/proposition.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/Classes/Message';
declare var $: any;

@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.component.html',
  providers:[PropositionService],
  styleUrls: ['./propositions.component.css']
})

export class PropositionsComponent {
  message: Message = new Message;
  Montant: number = 0;
  Montant1: number = 0;
  Imprimentes: ImprimenteDTO[] = [];
  Ordinateurs: OrdinateurDTO[] = [];
  groupedOrdinateurs: OrdinateurDTO[]=[];
  groupedImprimentes: ImprimenteDTO[]=[];
  fournisseurId: number = 0;
  id: number = 0;
  constructor(private PropositionService: PropositionService,private route: ActivatedRoute){}
  ngAfterViewInit(): void {
    setTimeout(()=>{
      $(document).ready(function() {
        $('#myTable').DataTable();
        //$('.datatable').dataTable();
      });
    },100);
  }
  ngOnInit(): void {
    console.log('On init..')
    
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // affiche l'ID dans la console du navigateur
    });
      console.log(this.id);
      this.fournisseurId=this.id;
      this.Imprimentes=this.getImprimantes(this.fournisseurId);
      this.Ordinateurs=this.getOrdinnateurs(this.fournisseurId);
      //this.Montant=this.getMontant(this.Ordinateurs);
      
    //   this.route.params.subscribe(params => {
    //    this.fournisseurId = +params['id'];
    //    console.log(params['id']);
      

    //   // Convertir en nombre
    //   // Utiliser l'ID du fournisseur pour récupérer les données des imprimantes ou effectuer d'autres actions
    // });
}
  // getImprimantes(fournisseurId:number):ImprimenteDTO[]{
  //   this.PropositionService.getImprimantes(fournisseurId).subscribe((Data: ImprimenteDTO[]) => {
  //     this.Imprimentes =  Data;
  //   });
  //   return this.Imprimentes;
  // }
  modeleAffiche1 = false;

  afficherModele1() {
    this.modeleAffiche1 = true;
    
  } 
  cacherModele1() {
    this.modeleAffiche1 = false;
  }

  modeleAffiche2 = false;

  afficherModele2() {
    this.modeleAffiche2 = true;
    
  } 
  cacherModele2() {
    this.modeleAffiche2 = false;
  }
  accepterProposition():void{console.log("salamaaaa");
    this.PropositionService.accepterProposition1(this.fournisseurId).subscribe({
      next: (res) => {
        //this.besoinsOrdinateurs = res;
        this.ngOnInit();
        alert(this.fournisseurId)
        console.log(res)

      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });
    
  }
  rejeterProposition():void{console.log("salamaaaa");
    this.PropositionService.rejeterProposition1(this.fournisseurId).subscribe({
      next: (res) => {
        //this.besoinsOrdinateurs = res;
        // this.ngOnInit();
        alert(this.fournisseurId)
        console.log(res)

      }, error: (err) => {
        alert("error")
        console.log(err)
      }
    });
    
  }
  // getOrdinnateurs(fournisseurId:number):OrdinateurDTO[]{
  //   this.PropositionService.getOrdinnateurs(fournisseurId).subscribe((Data1: OrdinateurDTO[]) => {
  //     this.Ordinateurs =  Data1;
  //     console.log(this.Ordinateurs);
     
  //   });
  //   return this.Ordinateurs;
  // }
  getOrdinnateurs(fournisseurId:number):OrdinateurDTO[]{
    
    this.PropositionService.getOrdinnateurs(fournisseurId).subscribe((Data1: OrdinateurDTO[]) => {
      for (let i = 0; i < Data1.length; i++) {
        const currentItem = Data1[i];    
        currentItem.qte=1;
     console.log("iiii");
     console.log(i);
        this.Montant =this.Montant+Data1[i].prix;
        
        console.log(this.Montant);
        let found = false;
        for (let j = 0; j < this.groupedOrdinateurs.length; j++) {
     
     
              
          const groupedItem = this.groupedOrdinateurs[j];
          
          if (groupedItem.cpu == currentItem.cpu && groupedItem.ram == currentItem.ram && groupedItem.ecran == currentItem.ecran && groupedItem.disque== currentItem.disque && groupedItem.prix== currentItem.prix && groupedItem.marque== currentItem.marque) {
            groupedItem.qte++;
            found = true;
        
            break;
          }
        }
        if (!found) {
          
          this.groupedOrdinateurs.push(currentItem);
        }
      }
    });
    return this.groupedOrdinateurs;
  }
  getImprimantes(fournisseurId:number):ImprimenteDTO[]{
    
    this.PropositionService.getImprimantes(fournisseurId).subscribe((Data1: ImprimenteDTO[]) => {
      for (let i = 0; i < Data1.length; i++) {
        const currentItem = Data1[i];
       
        currentItem.qte=1; this.Montant =this.Montant+Data1[i].prix;
        let found = false;
        for (let j = 0; j < this.groupedImprimentes.length; j++) {

          const groupedItem = this.groupedImprimentes[j];
          
          if (groupedItem.resolution == currentItem.resolution && groupedItem.marque== currentItem.marque && groupedItem.vitesse == currentItem.vitesse  && groupedItem.prix== currentItem.prix) {
            groupedItem.qte++;
            found = true;
            
            break;
          }
        }
        if (!found) {
          
          this.groupedImprimentes.push(currentItem);
        }
      }
    });
    return this.groupedImprimentes;
  }
  
  
  
  
  selectedItem: string = 'ordinateur'; // élément sélectionné par défaut
  
  items = [
    { value: 'ordinateur', label: 'Ordinateur' },
    { value: 'imprimante', label: 'Imprimante' }
  ];
  
    
  modeleAfficheMotifAccepter = false;

  afficherModele() {
    this.modeleAfficheMotifAccepter = true;
  }
  cacherModele() {
    this.modeleAfficheMotifAccepter = false;
  }
  modeleAfficheMotifRejeter = false;

  afficherModeleMotifRejeter() {
    this.modeleAfficheMotifRejeter = true;
  }
  cacherModeleMotifEliminer() {
    this.modeleAfficheMotifRejeter = false;
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
  EnvoyerNotif():void{
   
    this.message.message="accept Proposition"
    this.message.idFournisseur=this.id;
      this.PropositionService.EnvoyerNotif(this.message).subscribe({
        next: (res) => {
          //this.besoinsOrdinateurs = res;
          // this.ngOnInit();
          alert(this.id)
          console.log(res)
          console.log("nana hnaaayaa")
    
        }, error: (err) => {
          alert("error")
          console.log(err)
        }
      });
    
      }
      EnvoyerNotifR():void{
   
        this.message.message="refuse Proposition"
        this.message.idFournisseur=this.id;
          this.PropositionService.EnvoyerNotifR(this.message).subscribe({
            next: (res) => {
              //this.besoinsOrdinateurs = res;
              // this.ngOnInit();
              alert(this.id)
              console.log(res)
              console.log("nana hnaaayaa")
        
            }, error: (err) => {
              alert("error")
              console.log(err)
            }
          });
        
          }
  }

  


