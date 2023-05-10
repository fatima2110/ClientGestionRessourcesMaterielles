import { Component, OnInit } from '@angular/core';
import { Proposition } from "../Model/Proposition";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { PropoUpdt } from "../Model/PropoUpdt";
import { AuthService } from 'src/app/services/AuthService';
declare var $: any;

@Component({
  selector: 'app-liste-prop',
  templateUrl: './liste-prop.component.html',
  styleUrls: ['./liste-prop.component.css']
})
export class ListePropComponent implements OnInit {

  ListePropo!: Array<PropoUpdt>;



  constructor(private http: HttpClient, private authService: AuthService, private Route: Router, private LogSer: LoginService) {
    
  }
  getAllPropo() {
    this.LogSer.GetFournisseur().subscribe({
      next: (res) => {
        let idUser = res.id;
        this.http.get("http://localhost:8080/api/projet/Fournisseur/ListePropo/" + idUser)
          .subscribe((resultData: any) => {
            console.log(resultData);
            this.ListePropo = resultData;
          });
      }, error: (err) => {
        console.log(err);
      }
    })

  }

  ngOnInit(): void {
    this.getAllPropo();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      $(document).ready(function () {
        $('#myTable').DataTable();
        //$('.datatable').dataTable();
      });
    }, 500);}

}
