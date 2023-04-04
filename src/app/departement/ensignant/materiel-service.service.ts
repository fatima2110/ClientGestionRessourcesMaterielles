import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiel } from './materiel';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MaterielServiceService {

  constructor(private datePipe: DatePipe) { }
  myFunction(dateString: string | null) {
    if (dateString === null) {
      // handle null case
      return new Date();
    }
    return new Date(dateString);
    // use dateObj
  }
  getMateriels(): Materiel[] {
    var materiels = [
      { id: 0, type: "ordinateur mahfoud", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true},
      { id: 1, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 2, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 3, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:false },
      { id: 4, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:false },
      { id: 5, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:false },
      { id: 6, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:false },
      { id: 7, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 8, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 9, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 10, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 11, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 12, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 13, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 14, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 14, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 14, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 14, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 14, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 14, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 14, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 14, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 14, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 14, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
      { id: 14, type: "ordinateur", marque: "HP 45", code_barre: '123679', qtn: 12, date_affectation: this.myFunction("26/03/2000"),enPanne:true },
    ];
    console.log(materiels);
    return materiels;
  }
  enPanne(i:number):void{

  }
  enService(i:number):void{}



}
