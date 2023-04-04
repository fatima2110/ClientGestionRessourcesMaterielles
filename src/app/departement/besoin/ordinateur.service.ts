import { Injectable } from '@angular/core';
import { Ordinateur } from './ordinateur';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {

  constructor() { }
  addOrdinateur(newOrdinateur:Ordinateur){
    console.log(newOrdinateur);
    alert("ordinateur"+newOrdinateur.cpu);
  }
  deleteBesoin(i:number):void{

  }
}
