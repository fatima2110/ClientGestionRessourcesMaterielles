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
  private id = this.auth.getId();
  private url = "http://localhost:8080/getMateriels/" + this.id;


  constructor(private datePipe: DatePipe, private httpClient: HttpClient, private auth: AuthService) { }
  myFunction(dateString: string | null) {
    if (dateString === null) {
      // handle null case
      return new Date();
    }
    return new Date(dateString);
    // use dateObj
  }
  getMateriels(): Observable<Materiel[]> {
    const token = this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    var materiels = this.httpClient.get<Materiel[]>(this.url, httpOptions);
    return materiels;
  }
  enPanne(id: number): Observable<void> {
    const token = this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.httpClient.get<void>("http://localhost:8080/enPanne/" + id, httpOptions);
  }
  materielstate(id: string, state: string, id_constat:number): Observable<void> {
    const token = this.auth.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    //alert(id +" "+state)
    return this.httpClient.get<void>("http://localhost:8080/materielstate/" + id + "/" + state + "/" + id_constat, httpOptions);
  }




}
