import { Component, OnInit } from '@angular/core';
import { Ordinateur } from './ordinateur';
import { Imprimante } from './imprimante';
import { OrdinateurService } from './ordinateur.service';
import { ImprimanteService } from './imprimante.service';

@Component({
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrls: ['./besoin.component.css']
})
export class BesoinComponent implements OnInit {
  showOrdinateur = true;
  newOrdinateur = new Ordinateur();
  newImprimante = new Imprimante();
  oldImprimante=new Imprimante();
  oldOrdinateur=new Ordinateur();
  constructor(private ordinateurService: OrdinateurService, private imprimanteService: ImprimanteService) { }
  onOptionSelected(value: any) {
    if (value.value == 2) {
      this.showOrdinateur = false;
    } else {
      this.showOrdinateur = true;

    }
  }
  saveOrdinateur() {
  this.ordinateurService.addOrdinateur(this.newOrdinateur).subscribe({
next:(res)=>{
alert("i'm from typesecript all is good"+res);
},error:(err)=>{
  alert("error")
  console.log(err)
}
  });

  }
  saveImprimante() {
    this.imprimanteService.addImprimante(this.newImprimante).subscribe({
      next:(res)=>{
        alert("i'm from typesecript all is good"+res);
        },error:(err)=>{
          alert("error")
          console.log(err)
        }
    });
   }
  ngOnInit(): void {

  }
getImprimante(i:number):Imprimante{
this.oldImprimante=this.imprimanteService.getBesoin(i);
return this.oldImprimante;
}
getOrdinateur(i:number):Ordinateur{
  this.oldOrdinateur=this.ordinateurService.getBesoin(i);
  return this.oldOrdinateur;
  }
  deleteBesoinOrdinateur(i:number):void{
    this.ordinateurService.deleteBesoin(i);
  }
  confirmerDeleteOrdinateur(mat:string,i:number) {
    if(confirm("vous etes sur de supprimer "+mat +" ?"))
    this.deleteBesoinOrdinateur(i);
  }
  deleteBesoinImprimante(i:number):void{
    this.imprimanteService.deleteBesoin(i);
  }
  confirmerDeleteImprimante(mat:string,i:number) {
    if(confirm("vous etes sur de supprimer "+mat +" ?"))
    this.deleteBesoinImprimante(i);
  }
}
