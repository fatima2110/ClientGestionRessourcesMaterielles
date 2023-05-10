import { Component, OnInit } from '@angular/core';
import { Message } from '../Classes/Message';
import { Router } from '@angular/router';
import { MessagerieService } from '../pages/responsbale/Services/messagerie.service';
import { AuthService } from '../services/AuthService';
import { LoginService } from '../FournisseurComponents/services/login.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
  message: Message[] = [];
  id: number = 0;
  m: Message = new Message;
  nbNotifs: number = 0;

  constructor(private service: MessagerieService, private router: Router, private auth: AuthService, private serviceFour: LoginService) {
    const role: string | null = auth.getRole();
    if (role !== null && role !== undefined) {
      if (role === "FOURNISSEUR") {
        this.serviceFour.GetFournisseur().subscribe({
          next: (res) => {
            this.id = res.id;
          }, error: (err) => { console.log(err) }
        })
      }
      else {
        this.id = this.auth.getId();
      }

      this.service.getMessage(this.id).subscribe((message: Message[]) => {
        console.log("on va aficher la list des notif de :", this.id)
        this.message = message;
        console.log(message)
      });
      this.service.getvue(this.id).subscribe((n: number) => {
        console.log("on va aficher la list ici test test test test test ", this.id)
        this.nbNotifs = n;
        console.log(n)
      });
    }

  }
  ngOnInit(): void {

  }

  suprimmer(id: number) {
    console.log("on va suprimmer")
    alert(id)
    this.service.getsuprimmer(id).subscribe(() => {


    });

  }
  rediriger(m: Message) {
    let link = "";

    switch (m.message) {
      case "Nouvelles besoins sont ajoutes pour generer appelle d'offre":
        link = "/responsable/consulterBesoin"; break;

      case "Vous pouvez maintenat ajouter vous besoin":
        link = "/departement/besoin"; break;

      case "accept Proposition":
        if (!m.exsist) {
          link = "/fournisseur/FournissuerInfo";
        } break;

      case "votre Proposition a ete rejete":
        link = "./consulterBesoin"; break;

      case "Bonjour j'ai ajouter des besoins":
        link = "./consulterBesoin"; break;

      default:
        link = "/error"; break;

    }
    // if (m.message == "Nouvelles besoins sont ajoutes pour generer appelle d'offre") {
    //   link = "./consulterBesoin";
    // }
    // if (m.message == "accept Proposition") {
    //   if (!m.exsist) {
    //     link = "./FournissuerInfo";
    //   }

    //   else
    //     link = "./consulterBesoin";

    // }
    // else
    //   if (m.message == "votre Proposition a ete rejete") {
    //     link = "./consulterBesoin";
    //   }
    //   else
    //     if (m.message == "Vous pouvez maintenat ajouter vous besoin") {
    //       link = "/departement/besoin";
    //     }
    //     else
    //       if (m.message == "Bonjour j'ai ajouter des besoins ") {
    //         link = "./consulterBesoin";
    //       }
    //       else
    //         link = "./consulterBesoin";

    this.router.navigateByUrl(link);
    this.nbNotifs = this.nbNotifs -1;
  }

}
