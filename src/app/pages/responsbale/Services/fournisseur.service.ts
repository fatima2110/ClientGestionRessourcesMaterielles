import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FournisseurDTO } from 'src/app/Classes/FournisseurDTO';
import { Observable } from 'rxjs';
import { Message } from '../../../Classes/Message';
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

    readonly API_URL = "http://localhost:8088"

    readonly ENDPOINT_fournisseurs = "/fournisseur/getFournisseurs"
    readonly ENDPOINT_eliminer = "/fournisseur/delete"
    readonly ENDPOINT_Motif = "/fournisseur/envoyerMotif"
    readonly ENDPOINT_retirer = "/fournisseur/retirer"

    constructor(private httpClient : HttpClient) { }
     getFournisseurs() : Observable<FournisseurDTO[]>{
      //return this.httpClient.get<Fournisseur[]>(this.API_URL+this.ENDPOINT_fournisseurs)
      var Fournisseurs=this.httpClient.get<FournisseurDTO[]>(this.API_URL+this.ENDPOINT_fournisseurs);
    console.log(Fournisseurs);
    return Fournisseurs;
    }
    eliminerFournisseur(id: number){
      const url = `${this.API_URL}${this.ENDPOINT_eliminer}/${id}`;
    console.log("hada url dyali"+url)
      return this.httpClient.get<void>(url);
    } 
    EnvoyerMotif(message:Message){
      const url = `${this.API_URL}${this.ENDPOINT_Motif}`;
      console.log("hada url dyali  ?"+url)
      console.log(message.idFournisseur);
      console.log(message.message);
    
      return this.httpClient.post<void>(url,message);
    }
    retirerFournisseur(id: number){
      const url = `${this.API_URL}${this.ENDPOINT_retirer}/${id}`;
    console.log("hada url dyali"+url)
      return this.httpClient.get<void>(url);
    } 
}
