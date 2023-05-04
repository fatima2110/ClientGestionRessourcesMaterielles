import { Component } from '@angular/core';
import { FournisseurService } from 'src/app/pages/responsbale/Services/fournisseur.service';
import { OnInit } from '@angular/core';
import { FournisseurDTO } from 'src/app/Classes/FournisseurDTO';
import { Router } from '@angular/router';
import { Message } from 'src/app/Classes/Message';
@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css'],
  providers:[FournisseurService],
  styles: [`
    .modal-backdrop.show {
      backdrop-filter: blur(4px);
      opacity: 0.5;
      pointer-events: auto;
    }
  `]
})
export class FournisseursComponent implements OnInit{
  Fournisseurs: FournisseurDTO[] = [];
  message: Message = new Message;
  id:number= 0;
  constructor(private FournisseurService: FournisseurService,private router: Router){
    this.FournisseurService.getFournisseurs().subscribe((Data: FournisseurDTO[]) => {
      this.Fournisseurs =  Data;
    });
  }
 
  ngOnInit(): void {
    console.log('On init..')
   
  }
  voirPropositions(id: number) {
    this.router.navigate(['/responsable/propositions'], { queryParams: { id: id } });
  }
  modeleAffiche = false;

  afficherModele(id:number) {
    this.modeleAffiche = true;
    console.log("ha l id"+id)
    this.id=id;
  } 
  eliminerFournisseur():void{console.log("salamaaaa");
  this.FournisseurService.eliminerFournisseur(this.id).subscribe({
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
  this.FournisseurService.getFournisseurs().subscribe((Data: FournisseurDTO[]) => {
    this.Fournisseurs =  Data;
  });
}
  cacherModele() {
    this.modeleAffiche = false;
  }
  modeleAfficheMotifEliminer = false;

  afficherModeleMotifEliminer() {
    this.modeleAfficheMotifEliminer = true;
  }
  cacherModeleMotifEliminer() {
    this.modeleAfficheMotifEliminer = false;
  }
  EnvoyerMotif(ref:any):void{
   
this.message.message=ref.value;
this.message.idFournisseur=this.id;
  this.FournisseurService.EnvoyerMotif(this.message).subscribe({
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
  modeleAfficheR = false;

  afficherModeleR(id:number) {
    this.modeleAfficheR = true;
    console.log("ha l id"+id)
    this.id=id;
  }
  cacherModeleR() {
    this.modeleAfficheR = false;
  }
  retirerFournisseur():void{console.log("salamaaaa");
  this.FournisseurService.retirerFournisseur(this.id).subscribe({
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
