import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-error',
  templateUrl: './pages-error.component.html',
  styleUrls: ['./pages-error.component.css']
})
export class PagesErrorComponent implements OnInit {
  code:number= 403;
  message: string="Vous n'êtes pas autorisé à consulter cette page";

  constructor(private router: Router) { }

  ngOnInit(): void {
    /*const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      const state = navigation.extras.state;
      // Utilisez les valeurs du state ici
      this.code=state['data'].code;
      this.message=state['data'].message;
    } else {
      // Gérez le cas où state est null
    }*/

  }
}
