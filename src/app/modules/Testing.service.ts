import { Injectable } from '@angular/core';
import { Affectation } from './Affectation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestingService {
affecations:Affectation[];
constructor(private http:HttpClient) {
  this.affecations=[];
}
getAffectations():Observable<Affectation[]>{
  return this.http.get<Affectation[]>("http://localhost:8080/fournisseur/getAllAffectations");
}
}
