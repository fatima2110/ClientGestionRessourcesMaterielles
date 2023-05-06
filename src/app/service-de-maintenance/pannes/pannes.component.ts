import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterielStatus } from 'src/app/models/MaterielStatus';
import { Imprimante } from 'src/app/models/imprimante';
import { Ordinateur } from 'src/app/models/ordinateur';
import { PanneImprimente } from 'src/app/models/panne-imprimente';
import { PanneOrdinateur } from 'src/app/models/panne-ordinateur';
import { PanneService } from 'src/app/services/PannesService';
import { MaterielServiceService } from 'src/app/services/materiel-service.service';
declare var $: any;

@Component({
  selector: 'app-pannes',
  templateUrl: './pannes.component.html',
  styleUrls: ['./pannes.component.css']
})
export class PannesComponent implements OnInit, AfterViewInit{
  title : string = "";
  pannesOrdinateurs : PanneOrdinateur[]= []; 
  pannesImprimentes : PanneImprimente[]=[];

  notif: number;
  showOrdinateur = true;
  selectedDate!: string;

  newOrdinateur = new Ordinateur();
  newImprimante = new Imprimante();

  constructor(private panne:PanneService, private router: Router, private materielServiceService:MaterielServiceService){
    this.notif=0;
  }
  ngOnInit(): void {
    this.panne.getOrdinateurEnPanne().subscribe({
      next:(resp)=>{
        this.pannesOrdinateurs = resp;
      }, error:(err)=>{console.log(err);}
    });
    this.panne.getImprimenteEnPanne().subscribe({
      next:(resp)=>{
        this.pannesImprimentes = resp;
      }, error:(err)=>{console.log(err);}
    });
  }

  onOptionSelected(value: any) {
    if (value.value == 2) {
      this.showOrdinateur = false;
    } else {
      this.showOrdinateur = true;

    }
  }

  ngAfterViewInit(): void {
    //setTimeout(()=>{
      $(document).ready(function() {
        $('#myTable').DataTable();
        //$('.datatable').dataTable();
      });
    //},100);
  }

  materielState(event: MouseEvent, id:string){
    let state = '';
    const target = event.target as HTMLButtonElement;
    if (target.id === "btn-reparer"){
      //alert("reparer")
      state = "REPAREE";
    }
    this.materielServiceService.materielstate(id, state, 0).subscribe({
      next: (res) => {
        this.ngOnInit();
      }, error: (err) => {
        console.log(err)
      }
    });
  }

  redigerConstat(code_barre:string){
    const data = { code:  code_barre, showOrdinateur: this.showOrdinateur};
    this.router.navigate(['/service-de-maintenance/constat'], { state: data });
  }

}
