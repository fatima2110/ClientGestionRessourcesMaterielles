import {Component, OnInit} from '@angular/core';
import {Ordinateur} from "../Model/Ordinateur";
import {Imprimente} from "../Model/Imprimente";
import {Fournisseur} from "../Model/Fournisseur";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-liste-mat-propo',
  templateUrl: './liste-mat-propo.component.html',
  styleUrls: ['./liste-mat-propo.component.css']
})
export class ListeMatPropoComponent implements  OnInit {

  showOrdinateur=true;
  ListeOrdi!:Array<Ordinateur>;
  ListeImp!:Array<Imprimente>;
  four!:Fournisseur;
  id!:number;

  constructor(private http: HttpClient,private Rout:Router,private rout:ActivatedRoute){
    this.id=this.rout.snapshot.params['id'];
  }
  onOptionSelected(value: any) {
    if (value.value == 2) {
      this.showOrdinateur = false;
    } else {
      this.showOrdinateur = true;

    }
  }
  ngAfterViewInit(): void {
    setTimeout(()=>{
      $(document).ready(function() {
        $('#myTable').DataTable();
        //$('.datatable').dataTable();
      });
    },100);
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

  }

}
