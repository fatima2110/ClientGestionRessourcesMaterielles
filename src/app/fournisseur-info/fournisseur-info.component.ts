import { FournisseurDTO } from 'src/app/Classes/FournisseurDTO';
import { Component } from '@angular/core';
import { FournisseurInfoService } from './fournisseur-info.service';
import { LoginService } from '../FournisseurComponents/services/login.service';


@Component({
  selector: 'app-fournisseur-info',
  templateUrl: './fournisseur-info.component.html',
  styleUrls: ['./fournisseur-info.component.css']
})
export class FournisseurInfoComponent {
id:number=0;
Fournisseur:FournisseurDTO=new FournisseurDTO;
  constructor(private service:FournisseurInfoService, private loginServiec:LoginService){

    this.loginServiec.GetFournisseur().subscribe({
      next:(res)=>{
        this.loginServiec.GetFournisseur().subscribe({
          next:(res)=>{
            console.log("on va aficher fournisseur")
                this.Fournisseur = res;
                console.log("response de get fournisseur from fournisseurInfo", this.Fournisseur)
          },error:(err)=>{console.log(err)}
        })
      },error:(err)=>{console.log(err)}
    })
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
