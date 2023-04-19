import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imprimante } from '../models/imprimante';
import { Besoin } from '../models/besoin';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService';


@Injectable({
  providedIn: 'root'
})
export class ImprimanteService {
  private url = "http://localhost:8080/saveImprimante/1";


  constructor(private httpClient: HttpClient, private auth:AuthService) { }
  addImprimante(newImprimante: Imprimante): Observable<any> {
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    console.log(newImprimante);
    //alert("imprimente" + newImprimante.resolution);
    return this.httpClient.post(this.url, newImprimante,httpOptions);
  }
  deleteBesoin(id: number): Observable<void> {
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpClient.delete<void>("http://localhost:8080/deleteImprimente/"+id,httpOptions);
  }
  getBesoin(i: number): Imprimante {
    return Object.create(null);
  }
  modifyBesoin(besoin: Imprimante): Observable<void> {
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpClient.put<void>("http://localhost:8080/editImprimente",besoin,httpOptions);
  }
  getAllBesoins():Observable<Imprimante[]>{
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    const id = this.auth.getId();
  return this.httpClient.get<Imprimante[]>("http://localhost:8080/getBesoinsImpriments/"+id,httpOptions);
  }
  validerImprimente(imprimente:Imprimante){
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpClient.put<void>("http://localhost:8080/validImprimente/",imprimente,httpOptions);
  }
}
