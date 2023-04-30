
import { Injectable } from '@angular/core';
import { ImprimenteDTO} from 'src/app/Classes/ImprimenteDTO';
import { OrdinateurDTO } from 'src/app/Classes/OrdinateurDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BesoinService {
  private apiUrl="http://localhost:8088/api";
  constructor(private http: HttpClient) { }
  //recuperation des besoins
  //Récupère la liste des imprimente
  getImprimantes(): Observable<ImprimenteDTO[]> {
    var Imprimetes= this.http.get<ImprimenteDTO[]>(this.apiUrl+"/besoin/imprimantes");
    console.log((this.apiUrl+"/besoin/imprimantes"));
    console.log(Imprimetes);
    return Imprimetes;
  }

  // Récupère la liste des ordinateurs
  getOrdinateurs(): Observable<OrdinateurDTO []> {
   var ordinaterur=this.http.get<OrdinateurDTO []>(this.apiUrl+"/besoin/ordinateur");
   console.log(ordinaterur);
   return ordinaterur;
  }

// Sauvgarder Appel offre
save(imprimantes: ImprimenteDTO[]): Observable<void> {
  const url = `${this.apiUrl}/save`;
   console.log("bonjour save");
  return this.http.post<void>(url, imprimantes);
}
saveOrd(ordinateur: OrdinateurDTO[]): Observable<void> {
  const url = `${this.apiUrl}/savemat`;
  return this.http.post<void>(url,ordinateur);
}



  }

