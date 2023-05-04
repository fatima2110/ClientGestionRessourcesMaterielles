import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImprimenteDTO } from 'src/app/Classes/ImprimenteDTO';
import { Observable } from 'rxjs';
import { OrdinateurDTO } from '../../../Classes/OrdinateurDTO';
import { Message } from '../../../Classes/Message';
@Injectable({
  providedIn: 'root'
})
export class PropositionService {
  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_imprimantes = "/fournisseur/getImprimenteProposition"
  readonly ENDPOINT_ordinnateurs = "/fournisseur/getOrdinateurProposition"
  readonly ENDPOINT_accepter = "/fournisseur/accepter" 
  readonly ENDPOINT_rejeter = "/fournisseur/rejeter" 
  readonly ENDPOINT_notifaccept = "/fournisseur/notifaccept" 
  readonly ENDPOINT_notifrejet = "/fournisseur/notifrejet"
  constructor(private httpClient : HttpClient) { }
 
getImprimantes(id: number) : Observable<ImprimenteDTO[]> {
  const url = `${this.API_URL}${this.ENDPOINT_imprimantes}/${id}`;
  return this.httpClient.get<ImprimenteDTO[]>(url);
}

accepterProposition1(id: number){
  const url = `${this.API_URL}${this.ENDPOINT_accepter}/${id}`;

  return this.httpClient.get<void>(url);
} 
rejeterProposition1(id: number){
  const url = `${this.API_URL}${this.ENDPOINT_rejeter}/${id}`;

  return this.httpClient.get<void>(url);
} 

EnvoyerNotif(message:Message){
  const url = `${this.API_URL}${this.ENDPOINT_notifaccept}`;
  console.log("hada url dyali  ?"+url)
  console.log(message.idFournisseur);
  console.log(message.message);

  return this.httpClient.post<void>(url,message);
}
EnvoyerNotifR(message:Message){
  const url = `${this.API_URL}${this.ENDPOINT_notifrejet}`;
  console.log("hada url dyali  ?"+url)
  console.log(message.idFournisseur);
  console.log(message.message);

  return this.httpClient.post<void>(url,message);
}  
    
  getOrdinnateurs(id: number) : Observable<OrdinateurDTO[]>{
    const url = `${this.API_URL}${this.ENDPOINT_ordinnateurs}/${id}`;
    console.log(url);
    return this.httpClient.get<OrdinateurDTO[]>(url)
  }
}
