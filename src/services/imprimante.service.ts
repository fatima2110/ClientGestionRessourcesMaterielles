import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imprimante } from '../Modules/imprimante';
import { Besoin } from '../Modules/besoin';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImprimanteService {
  private url = "http://localhost:8080/saveImprimante/1";


  constructor(private httpClient: HttpClient) { }
  addImprimante(newImprimante: Imprimante): Observable<any> {
    console.log(newImprimante);
    //alert("imprimente" + newImprimante.resolution);
    return this.httpClient.post(this.url, newImprimante);
  }
  deleteBesoin(id: number): Observable<void> {
    return this.httpClient.delete<void>("http://localhost:8080/deleteImprimente/"+id);

  }
  getBesoin(i: number): Imprimante {
    return Object.create(null);
  }
  modifyBesoin(besoin: Imprimante): Observable<void> {
    return this.httpClient.put<void>("http://localhost:8080/editImprimente",besoin);
  }
  getAllBesoins():Observable<Imprimante[]>{
  return this.httpClient.get<Imprimante[]>("http://localhost:8080/getBesoinsImpriments/1");
  }
  validerImprimente(imprimente:Imprimante){
    return this.httpClient.put<void>("http://localhost:8080/validImprimente/",imprimente);
  }
}
