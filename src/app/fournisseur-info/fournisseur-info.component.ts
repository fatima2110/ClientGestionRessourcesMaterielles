import { FournisseurDTO } from 'src/app/Classes/FournisseurDTO';
import { Component } from '@angular/core';
import { FournisseurInfoService } from './fournisseur-info.service';


@Component({
  selector: 'app-fournisseur-info',
  templateUrl: './fournisseur-info.component.html',
  styleUrls: ['./fournisseur-info.component.css']
})
export class FournisseurInfoComponent {
id:number=1
Fournisseur:FournisseurDTO=new FournisseurDTO;
  constructor(private service:FournisseurInfoService){

    this.service.getFournisseur(this.id).subscribe((fournisseur: FournisseurDTO) => {
      console.log("on va aficher fournisseur")
        this.Fournisseur = fournisseur;
        console.log(fournisseur)
      });
  }
  InfoFournisseur(ref:any,ref1:any,ref2:any){
    this.Fournisseur.email=ref.value
    this.Fournisseur.gerant=ref1.value
    this.Fournisseur.adresse=ref2.value
    console.log("on va enegistrer")

    this.service.getChangerInfo(this.Fournisseur).subscribe(() => {
      console.log('Info founissseurs ont été sauvegardées avec succès !');
    });
  }
  Annuler(ref:any,ref1:any,ref2:any)
  {
ref.value=""
ref1.value=""
ref2.value=""
  }
}
