import { Component } from '@angular/core';
import { Constat } from 'src/app/models/constat';
import { PanneService } from 'src/app/services/PannesService';
import { MaterielServiceService } from 'src/app/services/materiel-service.service';
declare var $: any;

@Component({
  selector: 'app-gestion-pannes',
  templateUrl: './gestion-pannes.component.html',
  styleUrls: ['./gestion-pannes.component.css']
})
export class GestionPannesComponent {

  title : string = "";
  constats : Constat[] = [];
  constructor(private panne:PanneService, private materielServiceService:MaterielServiceService){
    
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
  action(code_barre:string, action:string){
    if(action === "reparer"){
      this.materielServiceService.materielstate(code_barre, "EnReparation").subscribe({
        next: (res) => {
          this.ngOnInit();
        }, error: (err) => {
          console.log(err)
        }
      });
    }
    if(action === "changer"){
      this.materielServiceService.materielstate(code_barre, "DoitChange").subscribe({
        next: (res) => {
          this.ngOnInit();
        }, error: (err) => {
          console.log(err)
        }
      });
    }

  }

}
