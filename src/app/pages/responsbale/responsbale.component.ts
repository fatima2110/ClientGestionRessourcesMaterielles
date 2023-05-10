import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/Classes/Message';
import { MessagerieService } from './Services/messagerie.service';
import { AuthService } from 'src/app/services/AuthService';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-responsbale',
  templateUrl: './responsbale.component.html',
  styleUrls: ['./responsbale.component.css']
})
export class ResponsbaleComponent {
  title = 'Dashboard - Responsable';
  login !: any;
  role !: any;
  isChef: boolean = false;
  photo: string = '';

  message: Message[] = [];
  id: number = 0;
  m: Message = new Message;

  nbNotifs: number = 0;

  constructor(private service: MessagerieService, private authService: AuthService, private router: Router, private http:HttpClient) {
    this.id = this.authService.getId();

    this.service.getMessage(this.id).subscribe((message: Message[]) => {
      //console.log("on va aficher la list")
      this.message = message;
      console.log(message)
    });
    this.service.getvue(this.id).subscribe((n: number) => {
      //console.log("on va aficher la list")
      this.nbNotifs = n;
      console.log(n)
    });



    this.login = this.authService.getLogin();
    this.role = this.authService.getRole();
    if (this.role == "CHEF_DEPARTEMENT") {
      this.isChef = true;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      $(document).ready(function () {
        $('#myTable').DataTable();
        //$('.datatable').dataTable();
      });
    }, 500);
  }

  signOut() {
    this.authService.singOut();
  }


  suprimmer(id: number) {
    console.log("on va suprimmer")

    this.service.getsuprimmer(id).subscribe(() => {


    });

  }
  rediriger(m: Message) {
    let link = "";
    if (m.message == "Nouvelles besoins sont ajoutes pour generer appel d'offre") {
      link = "/responsable/consulterBesoin";
    }
    //this.nbNotifs = this.nbNotifs=1;
    /*this.vue(m.id).subscribe({
      next:(res)=>{console.log(res)},
      error:(err)=>{console.log(err)}
    });*/

  }

  vue(msg_id:number){
    return this.http.get("http://localhost:8080/fournisseur/vue/"+msg_id);
  }



}

