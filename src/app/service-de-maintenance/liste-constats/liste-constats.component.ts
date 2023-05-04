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
        this.constats = resp;
      }, error:(err)=>{console.log(err);}
    });
  }
}
