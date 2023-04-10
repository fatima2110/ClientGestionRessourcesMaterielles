import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Besoin } from './besoin';
import { Imprimante } from '../besoin/imprimante';
import { BesoinImprimante } from './besoin-imprimante';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BesoinService {

  constructor(private httpclient:HttpClient) {

   }
  myFunction(dateString: string | null) {
    if (dateString === null) {
      // handle null case
      return new Date();
    }
    return new Date(dateString);
    // use dateObj
  }
  getBesoinsOrdinateurs():Observable<Besoin[]>{
    return this.httpclient.get<Besoin[]>("http://localhost:8080/getBesoinsOrdinateurChef/informatique");

  }
  getBesoinsImprimates():Observable<BesoinImprimante[]>{
return this.httpclient.get<BesoinImprimante[]>("http://localhost:8080/getBesoinsImprimentesChef/informatique");

  }
}
