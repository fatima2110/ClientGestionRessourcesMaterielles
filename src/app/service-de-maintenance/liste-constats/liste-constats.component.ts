import { Component } from '@angular/core';
import { Constat } from 'src/app/models/constat';
import { PanneService } from 'src/app/services/PannesService';

@Component({
  selector: 'app-liste-constats',
  templateUrl: './liste-constats.component.html',
  styleUrls: ['./liste-constats.component.css']
})
export class ListeConstatsComponent {
  title : string = "";
  constats : Constat[] = [];
  constructor(private panne:PanneService){}
  ngOnInit(): void {
    this.panne.getConstats().subscribe({
      next:(resp)=>{
        this.constats = resp;
      }, error:(err)=>{console.log(err);}
    });
  }
}
