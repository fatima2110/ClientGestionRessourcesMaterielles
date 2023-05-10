import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Appel_Offre} from "../Model/Appel_Offre";
import { AuthService } from 'src/app/services/AuthService';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-appel-offre',
  templateUrl: './appel-offre.component.html',
  styleUrls: ['./appel-offre.component.css']
})
export class AppelOffreComponent implements  OnInit {

  ListeAppel!:Array<Appel_Offre>;


  constructor(private http: HttpClient, private authService:AuthService, private logService:LoginService){

  }

  ngOnInit(): void {
    this.getAllProp();
  }
  // dejaPostulerFor(appel_id:number){
  //   this.isDejaPostuler(appel_id); 
  // }

  getAllProp(){
    this.http.get("http://localhost:8080/api/projet/Fournisseur/listeAppelOff")
      .subscribe((resultData: any)=>
      {
        console.log("comp appel offre "+resultData);
        this.ListeAppel = resultData;
      })
  }

  // isDejaPostuler(appel_id:number){
  //   const token= this.authService.getToken();
  //   const httpOptions = {
  //     headers: {
  //       "Authorization": "Bearer " + token
  //     }
  //   };
  //   this.logService.GetFournisseur().subscribe({
  //     next:(res)=>{
  //       return this.http.get<any>("http://localhost:8080/api/projet/Fournisseur/isDejaPostuler/"+ res.id +"/"+appel_id, httpOptions);
  //     },
  //     error:(err)=>{console.log(err)}
  //   })
  // }


}
