import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiel } from '../models/materiel';
import { DatePipe } from '@angular/common';
import { AuthService } from './AuthService';


@Injectable({
  providedIn: 'root'
})
export class MaterielServiceService {
  private url = "http://localhost:8080/getMateriels/1";
  private url_panne = "http://localhost:8080/enPanne/8";
  private url_service = "http://localhost:8080/enService/8";


  constructor(private datePipe: DatePipe,private httpClient:HttpClient, private auth:AuthService) { }
  myFunction(dateString: string | null) {
    if (dateString === null) {
      // handle null case
      return new Date();
    }
    return new Date(dateString);
    // use dateObj
  }
  getMateriels(): Observable<Materiel[]> {
    const id = this.auth.getId();
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    var materiels=this.httpClient.get<Materiel[]>(this.url,httpOptions);
    console.log(materiels);
    return materiels;
  }
  enPanne(id:number):Observable<void>{
    const token= this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpClient.get<void>("http://localhost:8080/enPanne/"+id,httpOptions);
  }




}
