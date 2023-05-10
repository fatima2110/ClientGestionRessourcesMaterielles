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
  id: number = 0;
  m: Message = new Message;
  nbNotifs: number = 0;

  constructor(private authService: AuthService,private service: MessagerieService,private router: Router) {
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

    if (m.message == "Vous pouvez maintenat ajouter vous besoin") {
      link = "/departement/besoin";
    }
    this.router.navigateByUrl(link);
  }
  
}

