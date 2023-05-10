import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../../../Classes/Message';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {
  readonly API_URL = "http://localhost:8080"

  readonly message = "/fournisseur/message"
  readonly ajouter = "/fournisseur/ajouter"
  readonly messageemtteur = "/fournisseur/messageEmetteur"
  readonly vue = "/fournisseur/number"
  readonly changer = "/fournisseur/changer"

  readonly suprimmer = "/fournisseur/suprimmer"


  constructor(private httpClient: HttpClient) { }
  getMessage(id: number): Observable<Message[]> {
    //return this.httpClient.get<Fournisseur[]>(this.API_URL+this.ENDPOINT_fournisseurs)
    const url = `${this.API_URL}${this.message}/${id}`;
    var Message = this.httpClient.get<Message[]>(url);
    console.log(Message);
    return Message;
  }
  getsuprimmer(id: number) {
    const url = `${this.API_URL}${this.suprimmer}/${id}`;
    console.log("hada url dyali" + url)
    return this.httpClient.get<void>(url);

  }

  getvue(id: number) {
    const url = `${this.API_URL}${this.vue}/${id}`;
    var Message = this.httpClient.get<number>(url);
    console.log(Message);
    return Message;
  }
  getChanger(message: Message[]): void {
    const url = `${this.API_URL}${this.changer}`;
    var Message = this.httpClient.post<void>(url, message);
    console.log(Message);

  }

  notifier(id_emett:number) {

    this.httpClient.get("http://localhost:8080/fournisseur/notifier/"+id_emett).subscribe({
      next:(res)=>{console.log(res)},
      error:(err)=>{console.log(err)}
      
    });
  }


}
