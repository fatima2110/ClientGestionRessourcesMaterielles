import { Component } from '@angular/core';
import { Message } from '../Classes/Message';
import { Router } from '@angular/router';
import { MessagerieService } from '../pages/responsbale/Services/messagerie.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent {
  message: Message[] = [];
  id:number= 2;
  m: Message = new Message;
 vue:number=0;
  constructor( private service:MessagerieService,private router: Router)
  {
this.service.getMessage(this.id).subscribe((message: Message[]) => {
console.log("on va aficher la list")
  this.message = message;
  console.log(message)
});
this.service.getvue(this.id).subscribe((n:number) => {
  console.log("on va aficher la list")
    this.vue = n;
    console.log(n)
  });

  }

suprimmer(id:number){
  console.log("on va suprimmer")
  alert(id)
  this.service.getsuprimmer(id).subscribe(() => {


    });

}
rediriger(m: Message) {
  let link = "";

  if (m.message == "Nouvelle besoin sont ajouter  pour generer appelle d'offre") {
    link = "/consulterBesoin";
  }
   if (m.message == "votre proposition a ete acepte") {
    if(!m.exsist)
    {
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
