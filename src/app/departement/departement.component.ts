import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/AuthService';
import { MessagerieService } from '../pages/responsbale/Services/messagerie.service';
import { Message } from '../Classes/Message';
declare var $: any;

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent {
  title = 'Dashboard - Departement';
  login !: any;
  role !: any;
  isChef: boolean = false;
  photo: string = '';

  message: Message[] = [];
  id: number = 2;
  m: Message = new Message;

  vue: number = 0;

  constructor(private authService: AuthService,private service: MessagerieService,private router: Router) {

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

  suprimmer(id: number) {
    console.log("on va suprimmer")

    this.service.getsuprimmer(id).subscribe(() => {


    });

  }
  rediriger(m: Message) {
    let link = "";

    if (m.message == "Nouvelle besoin sont ajouter  pour generer appelle d'offre") {
      link = "./consulterBesoin";
    }
    if (m.message == "votre proposition a ete acepte") {
      if (!m.exsist) {
        link = "./FournissuerInfo";
      }

      else
        link = "./consulterBesoin";

    }
    else
      if (m.message == "votre Proposition a ete rejete") {
        link = "./consulterBesoin";
      }
      else
        if (m.message == "Vous pouvez maintenant ajouter des besoins si vous avez") {
          link = "./consulterBesoin";
        }
        else
          if (m.message == "Bonjour j'ai ajouter des besoins ") {
            link = "./consulterBesoin";
          }
          else
            link = "./consulterBesoin";
    this.router.navigateByUrl(link);
  }
}

