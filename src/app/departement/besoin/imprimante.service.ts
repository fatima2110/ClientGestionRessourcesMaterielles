import { Injectable } from '@angular/core';
import { Imprimante } from './imprimante';

@Injectable({
  providedIn: 'root'
})
export class ImprimanteService {

  constructor() { }
  addImprimante(newImprimante:Imprimante){
    console.log(newImprimante);
    alert("Imprimante"+newImprimante.resolution);

  }
  deleteBesoin(i:number):void{

  }
}
