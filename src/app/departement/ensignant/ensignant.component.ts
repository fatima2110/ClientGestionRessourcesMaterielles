import { Component } from '@angular/core';
import { MaterielServiceService } from './materiel-service.service';
import { Materiel } from './materiel';
import { AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-ensignant',
  templateUrl: './ensignant.component.html',
  styleUrls: ['./ensignant.component.css']
})
export class EnsignantComponent {
  materils:any;
  title='Dashboard - Departement';

  ngAfterViewInit(): void {
    $(document).ready(function() {
      $('#myTable').DataTable();
      $('.datatable').dataTable();
    });}
  constructor(private materielServiceService:MaterielServiceService){}
  ngOnInit(): void {
    // this.Nom="chdaoui";
    // this.prenom="mahfoud";
    // this.age=22;
    // this.tel="0667767123";
    this.materils=this.materielServiceService.getMateriels();

    }
    enPanne(i:number):void{
this.materielServiceService.enPanne(i);
    }
    enService(i:number):void{
      this.materielServiceService.enService(i);
          }
    confirmerPanne(mat:string,i:number) {
      if(confirm("vous etes sur "+mat +"en panne ?"))
      this.enPanne(i);
    }
    confirmerService(mat:string,i:number) {
      if(confirm("vous etes sur "+mat +"en service ?"))
      this.enService(i);
    }

}
