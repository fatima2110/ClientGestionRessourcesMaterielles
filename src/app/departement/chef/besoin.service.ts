import { Injectable } from '@angular/core';
import { Besoin } from './besoin';
import { Imprimante } from '../besoin/imprimante';
import { BesoinImprimante } from './besoin-imprimante';

@Injectable({
  providedIn: 'root'
})
export class BesoinService {
  besoinsOrdinateurs:any;
  besoinsImprimantes:BesoinImprimante[];
  constructor() {
    this.besoinsImprimantes=[]
   }
  myFunction(dateString: string | null) {
    if (dateString === null) {
      // handle null case
      return new Date();
    }
    return new Date(dateString);
    // use dateObj
  }
  getBesoinsOrdinateurs():Besoin[]{
    this.besoinsOrdinateurs=[
      {id:0,ensignant:'ouzaref',type: "ordinateur mahfoud",cpu:'12 CPU',ram:'10Go RAM',disque:'256Go SSD',ecran:'1555 x 2000',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',type: "ordinateur mahfoud",cpu:'12 CPU',ram:'10Go RAM',disque:'256Go SSD',ecran:'1555 x 2000',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',type: "ordinateur mahfoud",cpu:'12 CPU',ram:'10Go RAM',disque:'256Go SSD',ecran:'1555 x 2000',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',type: "ordinateur mahfoud",cpu:'12 CPU',ram:'10Go RAM',disque:'256Go SSD',ecran:'1555 x 2000',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',type: "ordinateur mahfoud",cpu:'12 CPU',ram:'10Go RAM',disque:'256Go SSD',ecran:'1555 x 2000',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',type: "ordinateur mahfoud",cpu:'12 CPU',ram:'10Go RAM',disque:'256Go SSD',ecran:'1555 x 2000',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',type: "ordinateur mahfoud",cpu:'12 CPU',ram:'10Go RAM',disque:'256Go SSD',ecran:'1555 x 2000',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',type: "ordinateur mahfoud",cpu:'12 CPU',ram:'10Go RAM',disque:'256Go SSD',ecran:'1555 x 2000',qtn: 12,date_envoie:this.myFunction("26/03/2000")}
    ];
    return this.besoinsOrdinateurs;
  }
  getBesoinsImprimates():BesoinImprimante[]{
this.besoinsImprimantes=[
  {id:0,ensignant:'ouzaref',resolution: "1500 x 1400",vitesse:'28ppm',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',resolution: "1500 x 1400",vitesse:'28ppm',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',resolution: "1500 x 1400",vitesse:'28ppm',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',resolution: "1500 x 1400",vitesse:'28ppm',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',resolution: "1500 x 1400",vitesse:'28ppm',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',resolution: "1500 x 1400",vitesse:'28ppm',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',resolution: "1500 x 1400",vitesse:'28ppm',qtn: 12,date_envoie:this.myFunction("26/03/2000")},
      {id:0,ensignant:'ouzaref',resolution: "1500 x 1400",vitesse:'28ppm',qtn: 12,date_envoie:this.myFunction("26/03/2000")}

]
return this.besoinsImprimantes;
  }
}
