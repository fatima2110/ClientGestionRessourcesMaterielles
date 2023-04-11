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
  title='Dashboard - Les ressources affectees';

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
   this.materielServiceService.getMateriels().subscribe({
      next:(res)=>{
        this.materils=res;
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
    },error:(err)=>{
      alert("error")
      console.log(err)
    }
});
    }
    enService(id:number):void{
      this.materielServiceService.enService(id).subscribe({
        next:(res)=>{
          this.ngOnInit();
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
    confirmerService(mat:string,id:number) {
      if(confirm("vous etes sur "+mat +"en service ?"))
      console.log(id)
      this.enService(id);
    }

}
