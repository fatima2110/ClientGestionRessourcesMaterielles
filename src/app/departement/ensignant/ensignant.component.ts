import { Component } from '@angular/core';
import { MaterielServiceService } from '../../../services/materiel-service.service';
import { Materiel } from '../../../Modules/materiel';
import { AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-ensignant',
  templateUrl: './ensignant.component.html',
  styleUrls: ['./ensignant.component.css']
})
export class EnsignantComponent {
  materils:any;
  title='Dashboard - Les ressources affectees';
  stitle='les - affectations';
  enPannAlert:number;

  ngAfterViewInit(): void {
    /*$(document).ready(function() {
      $('#myTable').DataTable();
      $('.datatable').dataTable();
    });*/

    setTimeout(()=>{
      $(document).ready(function() {
        $('#myTable').DataTable();
        //$('.datatable').dataTable();
      });
    },500);

  }
  constructor(private materielServiceService:MaterielServiceService){
    this.enPannAlert=0;
  }
  ngOnInit(): void {
    // this.Nom="chdaoui";
    // this.prenom="mahfoud";
    // this.age=22;
    // this.tel="0667767123";
   this.materielServiceService.getMateriels().subscribe({
      next:(res)=>{
        this.materils=res;
        //console.log(res)

        },error:(err)=>{
          alert("error")
          console.log(err)
        }
    });

    }
    enPanne(id:number):void{

this.materielServiceService.enPanne(id).subscribe({
  next:(res)=>{
    this.ngOnInit();
    this.enPannAlert=1;
    },error:(err)=>{
      alert("error")
      console.log(err)
    }
});
    }
    confirmerPanne(mat:string,id:number) {
      if(confirm("vous etes sur "+mat +"en panne ?"))
      this.enPanne(id);
    }


}
