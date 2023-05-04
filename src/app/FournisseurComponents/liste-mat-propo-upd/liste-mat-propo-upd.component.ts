import {Component, OnInit} from '@angular/core';
import {Ordinateur} from "../Model/Ordinateur";
import {Imprimente} from "../Model/Imprimente";
import {Fournisseur} from "../Model/Fournisseur";
import {Proposition} from "../Model/Proposition";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../services/login.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-liste-mat-propo-upd',
  templateUrl: './liste-mat-propo-upd.component.html',
  styleUrls: ['./liste-mat-propo-upd.component.css']
})
export class ListeMatPropoUpdComponent implements  OnInit {

  showOrdinateur=true;
  ListeOrdi!:Array<Ordinateur>;
  ListeImp!:Array<Imprimente>;
  Prop ! :Proposition;
  id!:number;
  FormAjtOrdi!: FormGroup;
  FormAjtImp!: FormGroup;


  constructor(private http: HttpClient,private Rout:Router,private ServLog:LoginService,private rout:ActivatedRoute,private Fb:FormBuilder,private Fb2:FormBuilder){
    this.id=Number(this.rout.snapshot.params['id']);
  }
  onOptionSelected(value: any) {
    if (value.value == 2) {
      this.showOrdinateur = false;
    } else {
      this.showOrdinateur = true;

    }
  }

  getAllOrdi()
  {

    this.http.get("http://localhost:8080/api/projet/Fournisseur/ListeOrdiProp/"+this.id)

      .subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.ListeOrdi = resultData;
      });
  }
  getAllImpri(){
    this.http.get("http://localhost:8080/api/projet/Fournisseur/ListeImpProp/"+this.id)

      .subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.ListeImp = resultData;
      });

  }

  ngOnInit(): void {
    this.getAllOrdi();
    this.getAllImpri();
    this.FormAjtOrdi=this.Fb.group({
      MarqueOrdi:this.Fb.control(""),
      PrixOrdi:this.Fb.control("")

    });
    this.FormAjtImp=this.Fb2.group({
      MarqueImp:this.Fb2.control(""),
      PrixImp:this.Fb2.control("")

    });
  }

  ModOrdi(ordi: Ordinateur) {
    if(this.FormAjtOrdi.value.PrixOrdi==0 || this.FormAjtOrdi.value.MarqueOrdi==""){
      alert("VOUS DEVEZ SAISIR LES INFOS ");
    }
    else {
      ordi.prix=Number(this.FormAjtOrdi.value.PrixOrdi);
      ordi.marque=this.FormAjtOrdi.value.MarqueOrdi;
      let conf=confirm("ETEZ-VOUS SUR DE CETTE MODIFICATION?")
      if(conf){
      this.http.put("http://localhost:8080/api/projet/Fournisseur/ModOrdi",ordi,{responseType: 'text'}).subscribe((resultData: any)=>
      {
        console.log(resultData);
        alert("LA MODIFICATION EST FAITE")
      });
      }
    }
  }

  ModImp(imp:Imprimente){
    if(this.FormAjtImp.value.PrixImp==0 || this.FormAjtImp.value.MarqueImp==""){
      alert("VOUS DEVEZ SAISIR LES INFOS ");
    }
    else{
      imp.prix=Number(this.FormAjtImp.value.PrixImp);
      imp.marque=this.FormAjtImp.value.MarqueImp;
      let conf=confirm("ETEZ-VOUS SUR DE CETTE MODIFICATION")
      if(conf){
      this.http.put("http://localhost:8080/api/projet/Fournisseur/ModImp",imp,{responseType: 'text'}).subscribe((resultData: any)=>
      {
        console.log(resultData);
        alert("LA MODIFICATION EST FAITE")
      });
    }
    }
  }


}
