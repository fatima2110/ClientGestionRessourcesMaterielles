import { Component } from '@angular/core';
import { Constat } from 'src/app/models/constat';
import { PanneService } from 'src/app/services/PannesService';
declare var $: any;

@Component({
  selector: 'app-gestion-pannes',
  templateUrl: './gestion-pannes.component.html',
  styleUrls: ['./gestion-pannes.component.css']
})
export class GestionPannesComponent {

  title : string = "";
  constats : Constat[] = [];
  constructor(private panne:PanneService){
    
  }
  ngAfterViewInit(): void {
    setTimeout(()=>{
      $(document).ready(function() {
        //$('#myTable').DataTable();
        $('.datatable').dataTable();
      });
    },100)
  }
  ngOnInit(): void {
    this.panne.getConstats().subscribe({
      next:(resp)=>{
        this.constats = resp;
      }, error:(err)=>{console.log(err);}
    });
  }
  action(in_constat:number, action:string){
    if(action === "reparer"){
      //envoyer des messages aux fournisseurs
    }
    if(action === "changer"){

    }

  }

}
