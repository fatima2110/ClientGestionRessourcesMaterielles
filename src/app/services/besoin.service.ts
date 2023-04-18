import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Besoin } from '../models/besoin';
import { BesoinImprimante } from '../models/besoin-imprimante';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService';


@Injectable({
  providedIn: 'root'
})
export class BesoinService {

  constructor(private httpclient:HttpClient, private auth:AuthService) {

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
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpclient.get<Besoin[]>("http://localhost:8080/getBesoinsOrdinateurChef/informatique",httpOptions);

  }
  getBesoinsImprimates():Observable<BesoinImprimante[]>{
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpclient.get<BesoinImprimante[]>("http://localhost:8080/getBesoinsImprimentesChef/informatique",httpOptions);

  }

}
