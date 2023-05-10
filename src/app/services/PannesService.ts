import { Injectable } from '@angular/core';
import { Ordinateur } from '../models/ordinateur';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { AuthService } from './AuthService';
import { PanneOrdinateur } from '../models/panne-ordinateur';
import { PanneImprimente } from '../models/panne-imprimente';
import { Constat } from '../models/constat';

@Injectable({
  providedIn: 'root'
})
export class PanneService {
  constructor(private httpClient:HttpClient, private auth:AuthService) { }

  getOrdinateurEnPanne():Observable<PanneOrdinateur[]>{
    const id = this.auth.getId();
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpClient.get<PanneOrdinateur[]>("http://localhost:8080/ordinateurEnPanne",httpOptions);
  }

  getImprimenteEnPanne():Observable<PanneImprimente[]>{
    const id = this.auth.getId();
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpClient.get<PanneImprimente[]>("http://localhost:8080/imprimenteEnPanne",httpOptions);
  }

  ajouterConstat(constat:Constat){
    const id_technicien = this.auth.getId();
    constat.id_technicien=id_technicien;
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    console.log(constat.id_technicien+" "+constat.code_barre);
    return this.httpClient.post("http://localhost:8080/ajouterConstat",constat,httpOptions);
  }
  
  getConstats():Observable<Constat[]>{
    const id = this.auth.getId();
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpClient.get<Constat[]>("http://localhost:8080/getConstats",httpOptions);
  }
  action(id:number, action:string){
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    if(action==="envoyer"){
      return this.httpClient.get("http://localhost:8080/sendConstat/"+id,httpOptions);
    }
    else{
      return this.httpClient.delete("http://localhost:8080/deleteConstat/"+id,httpOptions);
    }
  }
}
