import { Injectable } from '@angular/core';
import {Fournisseur} from "../Model/Fournisseur";
import {FournisseurCnx} from "../Model/FournisseurCnx";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {FournisseurInscp} from "../Model/FournisseurInscp";
import { AuthService } from 'src/app/services/AuthService';
import { Register, Role } from 'src/app/models/register';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Fou : Fournisseur = new Fournisseur();
  aut!:boolean;
  constructor(private http: HttpClient, private authService:AuthService) { }

    Conct(Fcnx:FournisseurCnx):Fournisseur{
   this.http.post("http://localhost:8080/api/projet/Fournisseur/log",Fcnx,{responseType: 'json'}).subscribe((resultData:any)=>
   {
     console.log(resultData);
     this.Fou=resultData;
   });
   if(this.Fou==undefined)
     this.aut=false;
   else
     this.aut=true;
    return this.Fou;
  }
  GetFournisseur():Observable<Fournisseur>{
    const id = this.authService.getId();
    const token= this.authService.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    
    return this.http.get<Fournisseur>("http://localhost:8080/api/projet/Fournisseur/getFournisseur",httpOptions);
  }

  Inscrip(register:Register){
    return this.authService.register(register);

    /*this.http.post("http://localhost:8080/api/projet/Fournisseur/inscrip",FInsc,{responseType: 'json'}).subscribe((resultData: any)=>
    {
      console.log(resultData);
      this.Fou=resultData;
    });
    if(this.Fou==null){
      alert("Vérifiez vos infos saisis")
      this.aut=false;
    }
    else
      this.aut=true;
      return this.Fou;*/
  }
 IsAuthen():boolean{
    return this.aut;
 }
  }


