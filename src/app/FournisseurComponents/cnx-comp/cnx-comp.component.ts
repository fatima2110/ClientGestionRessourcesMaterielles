import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/Classes/Message';
import { MessagerieService } from 'src/app/pages/responsbale/Services/messagerie.service';
import { AuthService } from 'src/app/services/AuthService';
import { LoginService } from '../services/login.service';
declare var $: any;


@Component({
  selector: 'app-cnx-comp',
  templateUrl: './cnx-comp.component.html',
  styleUrls: ['./cnx-comp.component.css']
})
export class CnxCompComponent {

  title = 'Dashboard - Fournisseur';
  login !: any;
  role !: any;
  isChef: boolean = false;
  photo: string = '';
  nbNotifs = 0;


  message: Message[] = [];
  id: number = 0;
  m: Message = new Message;

  constructor(private service: MessagerieService, private authService: AuthService, private router: Router, private loginService: LoginService) {

    this.loginService.GetFournisseur().subscribe({
      next: (res) => {
        this.id = res.id
        this.service.getMessage(this.id).subscribe((message: Message[]) => {
          console.log("on va aficher la list")
          this.message = message;
          console.log(message)
        });
        this.service.getvue(this.id).subscribe((n: number) => {
          console.log("on va aficher la list")
          this.nbNotifs = n;
          console.log(n)
        });

        this.login = this.authService.getLogin();
        this.role = this.authService.getRole();

      },
      error: (err) => { console.log(err) }
    })
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
    if (m.message == "refuse Proposition")
      link = "/fournisseur/ListePropo";

    if (m.message == "accept Proposition")
      link = "/fournisseur/FournissuerInfo";

    this.router.navigateByUrl(link);
    this.nbNotifs = this.nbNotifs-1;
  }

}
