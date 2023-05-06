import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/Classes/Message';
import { MessagerieService } from './Services/messagerie.service';
import { AuthService } from 'src/app/services/AuthService';
declare var $: any;

@Component({
  selector: 'app-responsbale',
  templateUrl: './responsbale.component.html',
  styleUrls: ['./responsbale.component.css']
})
export class ResponsbaleComponent {
  title = 'Dashboard - Departement';
  login !: any;
  role !: any;
  isChef: boolean = false;
  photo: string = '';
  constructor(private service: MessagerieService, private authService: AuthService, private router: Router) {

    this.service.getMessage(this.id).subscribe((message: Message[]) => {
      console.log("on va aficher la list")
      this.message = message;
      console.log(message)
    });
    this.service.getvue(this.id).subscribe((n: number) => {
      console.log("on va aficher la list")
      this.vue = n;
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

  message: Message[] = [];
  id: number = 2;
  m: Message = new Message;

  vue: number = 0;

  suprimmer(id: number) {
    console.log("on va suprimmer")

    this.service.getsuprimmer(id).subscribe(() => {


    });

  }
  rediriger(m: Message) {
    let link = "";

    if (m.message == "Nouvelle besoin sont ajouter  pour generer appelle d'offre") {
      link = "/consulterBesoin";
    }
    if (m.message == "votre proposition a ete acepte") {
      if (!m.exsist) {
        link = "/FournissuerInfo";
      }

      else
        link = "/consulterBesoin";

    }
    else
      if (m.message == "votre Proposition a ete rejete") {
        link = "/consulterBesoin";
      }
      else
        if (m.message == "Vous pouvez maintenant ajouter des besoins si vous avez") {
          link = "/consulterBesoin";
        }
        else
          if (m.message == "Bonjour j'ai ajouter des besoins ") {
            link = "/consulterBesoin";
          }
          else
            link = "/consulterBesoin";
    this.router.navigateByUrl(link);
  }



}

