import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ordinateur } from "../Model/Ordinateur";
import { Imprimente } from "../Model/Imprimente";
import { Proposition } from "../Model/Proposition";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-poser-propo',
  templateUrl: './poser-propo.component.html',
  styleUrls: ['./poser-propo.component.css']
})
export class PoserPropoComponent implements OnInit {
  showOrdinateur = true;
  AddOrdi = false;
  AddImp = false;
  ListeOrdi!: Array<Ordinateur>;
  ListeImp!: Array<Imprimente>;
  Prop: Proposition = new Proposition();
  FormAjtOrdi!: FormGroup;
  FormAjtImp!: FormGroup;
  id!: number;
  confirmerProposition = 0;
  notif = 0;

  constructor(private http: HttpClient, private Rout: Router, private LogSer: LoginService, private Fb: FormBuilder, private Fb2: FormBuilder, private rout: ActivatedRoute) {
    this.id = Number(this.rout.snapshot.params['id']);
  }
  onOptionSelected(value: any) {
    if (value.value == 2) {
      this.showOrdinateur = false;
    } else {
      this.showOrdinateur = true;

    }
  }

  getAllOrdi() {

    this.http.get("http://localhost:8080/api/projet/Fournisseur/ListeOrdi/" + this.id)

      .subscribe((resultData: any) => {
        console.log(resultData);
        this.ListeOrdi = resultData;
      });
  }
  getAllImpri() {
    this.http.get("http://localhost:8080/api/projet/Fournisseur/ListeImp/" + this.id)

      .subscribe((resultData: any) => {
        console.log(resultData);
        this.ListeImp = resultData;
      });

  }

  ngOnInit(): void {
    this.LogSer.GetFournisseur().subscribe({
      next: (res) => {
        this.Prop = { status: "En_cour", fournisseur: res };
      }, error: (err) => { console.log(err) }
    });

    console.log("four", this.Prop.fournisseur);
    this.getAllOrdi();
    this.getAllImpri();
    this.AddOrdi = false;
    this.AddImp = false;
    this.FormAjtOrdi = this.Fb.group({
      MarqueOrdi: this.Fb.control(""),
      PrixOrdi: this.Fb.control("")

    });
    this.FormAjtImp = this.Fb2.group({
      MarqueImp: this.Fb2.control(""),
      PrixImp: this.Fb2.control("")

    });
    this.notif = 0;
  }

  ADDOrdi(ordi: Ordinateur) {
    if (this.FormAjtOrdi.value.PrixOrdi == 0 || this.FormAjtOrdi.value.MarqueOrdi == "") {
      //alert("VOUS DEVEZ SAISIR LES INFOS ");
    }
    else {
      for (var i = 0; i < this.ListeOrdi.length; i++) {
        if (this.ListeOrdi[i].id == ordi.id) {
          this.ListeOrdi[i].prix = Number(this.FormAjtOrdi.value.PrixOrdi);
          this.ListeOrdi[i].marque = this.FormAjtOrdi.value.MarqueOrdi;
          //alert("Paase ");
          this.AddOrdi = true;
          break;
        }
      }

    }
  }
  ADDImp(imp: Imprimente): void {

    if (this.FormAjtImp.value.PrixImp == 0 || this.FormAjtImp.value.MarqueImp == "") {
      //alert("VOUS DEVEZ SAISIR LES INFOS ");
    }
    else {
      for (var i = 0; i < this.ListeImp.length; i++) {
        if (this.ListeImp[i].id == imp.id) {
          this.ListeImp[i].prix = Number(this.FormAjtImp.value.PrixImp);
          this.ListeImp[i].marque = this.FormAjtImp.value.MarqueImp;
          //alert("Paase ");
          this.AddImp = true;
          break;
        }
      }
    }
  }

  INsererOrdi(ordi: Ordinateur) {
    this.http.post("http://localhost:8080/api/projet/Fournisseur/ADDOrdi", ordi, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      //alert("Ordinateur" + resultData);
    });
  }

  INsererImp(imp: Imprimente) {
    this.http.post("http://localhost:8080/api/projet/Fournisseur/ADDImp", imp, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      //alert("Imprimente :" + resultData)
    });

  }

  PoserPropo() {
    for (let i = 0; i < this.ListeOrdi.length; i++) {
      if (this.ListeOrdi[i].prix == 0 || this.ListeOrdi[i].marque == ""){
        this.confirmerProposition = 0;
        //this.notif = 1;
      }
      else
        this.confirmerProposition = 1;
    }
    for (let i = 0; i < this.ListeImp.length; i++) {
      if (this.ListeImp[i].prix == 0 || this.ListeImp[i].marque == ""){
        this.confirmerProposition = 0;
        //this.notif = 2;
      }
      else
        this.confirmerProposition = 1;
    }
    if (this.confirmerProposition == 1) {
      this.http.post("http://localhost:8080/api/projet/Fournisseur/ADDPropo", this.Prop, { responseType: 'text' }).subscribe((resultData: any) => {
        console.log(resultData);
        let id = 0;
        id = Number(resultData);
        //alert("Ajouter " + id);
        for (let i = 0; i < this.ListeOrdi.length; i++) {
          if (id != 0 && this.ListeOrdi[i].marque != "" && this.ListeOrdi[i].prix != 0) {
            this.ListeOrdi[i].id_Prop = id;
            this.INsererOrdi(this.ListeOrdi[i]);
          }
          else {
            //alert("Probleme ");
            break
          }
        }
        for (let i = 0; i < this.ListeImp.length; i++) {
          if (id != 0 && this.ListeImp[i].marque != "" && this.ListeImp[i].prix != 0) {
            this.ListeImp[i].id_Prop = id;
            this.INsererImp(this.ListeImp[i]);
          }
          else {
            //alert("Probleme");
            break
          }
        }
      });
      this.notif = 2;
      this.Rout.navigateByUrl("/fournisseur/ListePropo");
    }
    else {
      this.notif = 1;
    }
  }

}
