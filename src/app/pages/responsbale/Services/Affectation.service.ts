import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Affectation } from 'src/app/modules/Affectation';
import { Material } from 'src/app/Classes/Material';
import { Materiel } from 'src/app/modules/Materiel';
import { Ensiegnant } from 'src/app/modules/Ensiegnant';
import { EnsiegnantAffectation } from 'src/app/modules/EnsiegnantAffectation';
import { AffectationDto } from 'src/app/DTO/AffectationDto';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

constructor(private http:HttpClient) {

 }
getAffectations():Observable<Affectation[]>{
  return this.http.get<Affectation[]>("http://localhost:8080/fournisseur/getAllAffectations");
}
getNonAffectations():Observable<Materiel[]>{
  return this.http.get<Materiel[]>("http://localhost:8080/fournisseur/getAllNoAffectations");
}
retirerRessourceAffecte(id:number):Observable<void>{
return this.http.delete<void>("http://localhost:8080/fournisseur/retirerRessourceAffecte/"+id);
}
retirerRessourceNonAffecte(id:number):Observable<void>{
  return this.http.delete<void>("http://localhost:8080/fournisseur/retirerRessourceNoAffecte/"+id);
  }
  getAllEnsOfDepart(departement:string):Observable<Ensiegnant[]>{
    return this.http.get<Ensiegnant[]>("http://localhost:8080/fournisseur/getEnsOfDepart/"+departement)
  }
addAffectaion(affectation:AffectationDto):Observable<void>{
return this.http.post<void>("http://localhost:8080/fournisseur/addAffectaion",affectation);
}

}
