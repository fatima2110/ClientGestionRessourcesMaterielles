import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiel } from '../Modules/materiel';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class MaterielServiceService {
  private url = "http://localhost:8080/getMateriels/1";
  private url_panne = "http://localhost:8080/enPanne/8";
  private url_service = "http://localhost:8080/enService/8";


  constructor(private datePipe: DatePipe,private httpClient:HttpClient) { }
  myFunction(dateString: string | null) {
    if (dateString === null) {
      // handle null case
      return new Date();
    }
    return new Date(dateString);
    // use dateObj
  }
  getMateriels(): Observable<Materiel[]> {
    var materiels=this.httpClient.get<Materiel[]>(this.url);
    console.log(materiels);
    return materiels;
  }
  enPanne(id:number):Observable<void>{
return this.httpClient.get<void>("http://localhost:8080/enPanne/"+id);
  }




}
