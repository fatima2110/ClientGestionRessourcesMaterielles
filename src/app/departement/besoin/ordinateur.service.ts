import { Injectable } from '@angular/core';
import { Ordinateur } from './ordinateur';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {

  private url="http://localhost:8080/saveOrdinateur";
  constructor(private httClient:HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addOrdinateur(newOrdinateur:Ordinateur):Observable<any>{
    console.log(newOrdinateur);
    alert("ordinateur"+newOrdinateur.cpu);
return this.httClient.post(this.url,newOrdinateur);
  }
  deleteBesoin(i:number):void{

  }
  getBesoin(i:number):Ordinateur{
    return Object.create(null);
  }
  modifyBesoin(besoin :Ordinateur):void{

  }
}
