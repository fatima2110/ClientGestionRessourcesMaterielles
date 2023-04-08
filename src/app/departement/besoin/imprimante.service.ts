import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imprimante } from './imprimante';
import { Besoin } from '../chef/besoin';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImprimanteService {
  private url = "http://localhost:8080/saveImprimante";


  constructor(private httpClient: HttpClient) { }
  addImprimante(newImprimante: Imprimante): Observable<any> {
    console.log(newImprimante);
    alert("imprimente" + newImprimante.resolution);
    return this.httpClient.post(this.url, newImprimante);
  }
  deleteBesoin(i: number): void {

  }
  getBesoin(i: number): Imprimante {
    return Object.create(null);
  }
  modifyBesoin(besoin: Imprimante): void {

  }
}
