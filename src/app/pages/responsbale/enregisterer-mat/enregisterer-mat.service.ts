import { Injectable } from '@angular/core';
import { ImprimenteDTO} from 'src/app/Classes/ImprimenteDTO';
import { OrdinateurDTO } from 'src/app/Classes/OrdinateurDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnregistererMatService {

  private apiUrl="http://localhost:8080/api";
  constructor(private http: HttpClient) { }
  //recuperation des besoins
  //Récupère la liste des imprimente
  getImprimantes(): Observable<ImprimenteDTO[]> {
    var Imprimetes= this.http.get<ImprimenteDTO[]>(this.apiUrl+"/EnregistrerIm");
    //console.log(Imprimetes);
    return Imprimetes;
  }

  // Récupère la liste des ordinateurs
  getOrdinateurs(): Observable<OrdinateurDTO []> {
   var ordinaterur=this.http.get<OrdinateurDTO []>(this.apiUrl+"/EnregistererOrd");
console.log("matrial");
   console.log(ordinaterur);
   return ordinaterur;
  }

// Enregistrer les materiels (code barre et date de livraison)
save(imprimantes: ImprimenteDTO[]): Observable<void> {
  const url = `${this.apiUrl}/EnregistrerMateLivreIm`;
   console.log("bonjour save");
  return this.http.post<void>(url, imprimantes);
}
saveOm(ordinateur: OrdinateurDTO[]): Observable<void> {
  const url = `${this.apiUrl}/EnregistrerMateLivreOr`;
   console.log("bonjour save");
  return this.http.post<void>(url, ordinateur);
}
}
