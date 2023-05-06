import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Constat } from 'src/app/models/constat';
import { PanneService } from 'src/app/services/PannesService';
declare var $: any;

@Component({
  selector: 'app-liste-constats',
  templateUrl: './liste-constats.component.html',
  styleUrls: ['./liste-constats.component.css']
})
export class ListeConstatsComponent implements OnInit, AfterViewInit{
  title : string = "";
  constats : Constat[] = [];
  constructor(private panne:PanneService){
    
  }
  ngAfterViewInit(): void {
    setTimeout(()=>{
      $(document).ready(function() {
        $('#myTable').DataTable();
        //$('.datatable').dataTable();
      });
    },500);
  }
  ngOnInit(): void {
    this.panne.getConstats().subscribe({
      next:(resp)=>{
        console.log("ici",resp)
        this.constats = resp;
      }, error:(err)=>{console.log(err);}
    });
  }

  action(id:number, action:string){
    this.panne.action(id, action).subscribe({
      next:(resp)=>{
        this.cancel();
        console.log(resp);
      }, error:(err)=>{console.log(err);}
    });
  }
  cancel(){
    this.constats = [];this.ngOnInit();
  }
}
