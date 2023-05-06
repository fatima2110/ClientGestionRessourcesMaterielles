import { Injectable } from '@angular/core';
import {Imprimente} from '../Classes/Imprimente';
import {Ordinateur} from '../Classes/Ordinateur'
import { Enseignant } from '../Classes/Ensiegnant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BesoinService {

  private apiUrl="http://localhost:8080/besoin";
  constructor(private http: HttpClient) { }
  getImprimantes(): Observable<Imprimente[]> {
    return this.http.get<Imprimente[]>(`${this.apiUrl}/imprimantes`);
  }

  // Récupère la liste des ordinateurs
  getOrdinateurs(): Observable<Ordinateur[]> {
    return this.http.get<Ordinateur[]>(`${this.apiUrl}/ordinateurs`);
  }

  // Récupère la liste des enseignants
  getEnseignantsoR(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(`${this.apiUrl}/enseignantsIM`);
  }
  getEnseignantsIM(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(`${this.apiUrl}/enseignantsOR`);
  }

}
