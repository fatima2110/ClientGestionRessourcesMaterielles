import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Appel_Offre} from "../Model/Appel_Offre";

@Component({
  selector: 'app-appel-offre',
  templateUrl: './appel-offre.component.html',
  styleUrls: ['./appel-offre.component.css']
})
export class AppelOffreComponent implements  OnInit {

  ListeAppel!:Array<Appel_Offre>;



  constructor(private http: HttpClient,private Rout:Router){

  }

  ngOnInit(): void {
    this.getAllProp();
  }

  getAllProp(){
    this.http.get("http://localhost:8080/api/projet/Fournisseur/listeAppelOff")
      .subscribe((resultData: any)=>
      {
        console.log("comp appel offre "+resultData);
        this.ListeAppel = resultData;
      })
  }


}
