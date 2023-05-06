import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FournisseurDTO } from '../Classes/FournisseurDTO';


@Injectable({
  providedIn: 'root'
})
export class FournisseurInfoService {
  readonly API_URL = "http://localhost:8080/fournisseur/infoFournisseur"
  readonly API_URL1 = "http://localhost:8080/fournisseur/info"
  constructor(private httpClient : HttpClient) { }
  getChangerInfo(fournisseur :FournisseurDTO):Observable<void>{
    const url = `${this.API_URL}`;
    var Fournisseur=this.httpClient.post<void>(url,fournisseur);
    console.log(Fournisseur);
    return Fournisseur;


   }
   getFournisseur(id: number) : Observable<FournisseurDTO>{

    const url = `${this.API_URL1}/${id}`;
    console.log("url "+url)
   var Fournisseur=this.httpClient.get<FournisseurDTO>(url);

  console.log(Fournisseur);
  return Fournisseur;
  }
}

