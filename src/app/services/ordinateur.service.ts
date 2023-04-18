import { Injectable } from '@angular/core';
import { Ordinateur } from '../models/ordinateur';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {

  private url="http://localhost:8080/saveOrdinateur/1";
  constructor(private httpClient:HttpClient, private auth:AuthService) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addOrdinateur(newOrdinateur:Ordinateur):Observable<any>{
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    console.log(newOrdinateur);
    //alert("ordinateur"+newOrdinateur.cpu);
    return this.httpClient.post(this.url,newOrdinateur,httpOptions);
  }
  deleteBesoin(id: number): Observable<void> {
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpClient.delete<void>("http://localhost:8080/deleteOrdinateur/"+id,httpOptions);

  }
  getBesoin(i:number):Ordinateur{
    return Object.create(null);
  }
  modifyBesoin(besoin :Ordinateur):Observable<void>{
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpClient.put<void>("http://localhost:8080/editOrdinateur/",besoin,httpOptions);
  }
  getAllBesoins():Observable<Ordinateur[]>{
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpClient.get<Ordinateur[]>("http://localhost:8080/getBesoinsOrdinateurs/1",httpOptions);
  }
  validerOrdinateur(ordinateur:Ordinateur){
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpClient.put<void>("http://localhost:8080/validOrdibateur/",ordinateur,httpOptions);
  }

}
