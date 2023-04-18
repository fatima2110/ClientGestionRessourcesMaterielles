import { Injectable } from '@angular/core';
import { Ordinateur } from '../Modules/ordinateur';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {

  private url="http://localhost:8080/saveOrdinateur/1";
  constructor(private httpClient:HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addOrdinateur(newOrdinateur:Ordinateur):Observable<any>{
    console.log(newOrdinateur);
    //alert("ordinateur"+newOrdinateur.cpu);
return this.httpClient.post(this.url,newOrdinateur);
  }
  deleteBesoin(id: number): Observable<void> {
    return this.httpClient.delete<void>("http://localhost:8080/deleteOrdinateur/"+id);

  }
  getBesoin(i:number):Ordinateur{
    return Object.create(null);
  }
  modifyBesoin(besoin :Ordinateur):Observable<void>{
    return this.httpClient.put<void>("http://localhost:8080/editOrdinateur/",besoin);
  }
  getAllBesoins():Observable<Ordinateur[]>{
    return this.httpClient.get<Ordinateur[]>("http://localhost:8080/getBesoinsOrdinateurs/1");
  }
  validerOrdinateur(ordinateur:Ordinateur){
    return this.httpClient.put<void>("http://localhost:8080/validOrdibateur/",ordinateur);
  }

}
