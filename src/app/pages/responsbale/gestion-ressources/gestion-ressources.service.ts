import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImprimenteDTO } from 'src/app/Classes/ImprimenteDTO';
import { OrdinateurDTO } from 'src/app/Classes/OrdinateurDTO';

@Injectable({
  providedIn: 'root'
})
export class GestionRessourcesService {

  private apiUrl="http://localhost:8088/api";
  constructor(private http: HttpClient) { }
  //recuperation les Materiels
  //Récupère la liste des imprimente
  getImprimantes(): Observable<ImprimenteDTO[]> {
    var Imprimetes= this.http.get<ImprimenteDTO[]>(this.apiUrl+"/ressourcesIm");
    //console.log(Imprimetes);
    return Imprimetes;
  }

  // Récupère la liste des ordinateurs
  getOrdinateurs(): Observable<OrdinateurDTO []> {
   var ordinaterur=this.http.get<OrdinateurDTO []>(this.apiUrl+"/ressourcesOr");
console.log("matrial");
   console.log(ordinaterur);
   return ordinaterur;
  }
  suprimmerOr(id: number): Observable<void> {
    const url = `${this.apiUrl}/suprimerOr/${id}`;
     console.log("suprimmer");
     console.log(url)
    return this.http.get<void>(url);
  }
  suprimmerIm(id: number): Observable<void> {
    const url = `${this.apiUrl}/suprimerim/${id}`;
     console.log("suprimmer im");
     console.log(url)
    return this.http.get<void>(url);
  }
}
