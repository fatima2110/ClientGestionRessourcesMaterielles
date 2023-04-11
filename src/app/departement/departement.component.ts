import { MaterielServiceService } from './ensignant/materiel-service.service';
import { Component } from '@angular/core';
import { Materiel } from './ensignant/materiel';
import { AfterViewInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements AfterViewInit {
  materils:any;
  title='Dashboard - Departement';
  path:string;

  ngAfterViewInit(): void {
    $(document).ready(function() {
      $('#myTable').DataTable();
    });}
  constructor(private materielServiceService:MaterielServiceService,private router:Router,private route:ActivatedRoute){
    this.path='';
  }
  ngOnInit(): void {
    // this.Nom="chdaoui";
    // this.prenom="mahfoud";
    // this.age=22;
    // this.tel="0667767123";
    this.materils=this.materielServiceService.getMateriels();
    this.path=this.route.snapshot.url[0].path;




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

