import { Component } from '@angular/core';
import { FournisseurDTO } from 'src/app/Classes/FournisseurDTO';
import { ListenoirService } from 'src/app/pages/responsbale/Services/listenoir.service';
@Component({
  selector: 'app-listenoir',
  templateUrl: './listenoir.component.html',
  styleUrls: ['./listenoir.component.css'],
  providers:[ListenoirService],
  styles: [`
    .modal-backdrop.show {
      backdrop-filter: blur(4px);
      opacity: 0.5;
      pointer-events: auto;
    }
  `]
})
export class ListenoirComponent {
  Fournisseurs: FournisseurDTO[] = [];
  id:number= 0;
  constructor(private ListenoirService: ListenoirService){
    this.ListenoirService.getFournisseurs().subscribe((Data: FournisseurDTO[]) => {
      this.Fournisseurs =  Data;
    });
  }
 
  ngOnInit(): void {
    console.log('On init..')
   
  }
  modeleAffiche = false;

  afficherModele(id:number) {
    this.modeleAffiche = true;
    console.log("ha l id"+id)
    this.id=id;
  }
  cacherModele() {
    this.modeleAffiche = false;
  }
  retirerFournisseur():void{console.log("salamaaaa");
  this.ListenoirService.retirerFournisseur(this.id).subscribe({
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
  this.ListenoirService.getFournisseurs().subscribe((Data: FournisseurDTO[]) => {
    this.Fournisseurs =  Data;
  });
  
}
}
