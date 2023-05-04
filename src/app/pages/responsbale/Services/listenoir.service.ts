import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FournisseurDTO } from 'src/app/Classes/FournisseurDTO';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListenoirService {
  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_fournisseurs = "/fournisseur/listeNoir"
  readonly ENDPOINT_retirer = "/fournisseur/retirer"


  constructor(private httpClient : HttpClient) { }
   getFournisseurs() : Observable<FournisseurDTO[]>{
    //return this.httpClient.get<Fournisseur[]>(this.API_URL+this.ENDPOINT_fournisseurs)
    var Fournisseurs=this.httpClient.get<FournisseurDTO[]>(this.API_URL+this.ENDPOINT_fournisseurs);
  console.log(Fournisseurs);
  return Fournisseurs;
  }
  retirerFournisseur(id: number){
    const url = `${this.API_URL}${this.ENDPOINT_retirer}/${id}`;
  console.log("hada url dyali"+url)
    return this.httpClient.get<void>(url);
  }
}
