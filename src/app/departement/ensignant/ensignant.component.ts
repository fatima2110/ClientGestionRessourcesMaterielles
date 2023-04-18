import { Component } from '@angular/core';
import { MaterielServiceService } from '../../services/materiel-service.service';
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
    setTimeout(()=>{
      $(document).ready(function() {
        $('#myTable').DataTable();
      });
    },500);

  }
  constructor(private materielServiceService:MaterielServiceService){
    this.enPannAlert=0;
  }
  ngOnInit(): void {
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
