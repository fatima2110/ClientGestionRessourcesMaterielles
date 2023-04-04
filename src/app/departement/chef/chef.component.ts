import { Component, OnInit } from '@angular/core';
import { Besoin } from './besoin';
import { BesoinService } from './besoin.service';
declare var $: any;

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit{
  showOrdinateur=true;
  besoinsOrdinateurs:any;
  besoinsImprimantes:any;
  constructor(private besoinservice:BesoinService){}
  ngAfterViewInit(): void {
    $(document).ready(function() {
      $('#myTable').DataTable();
      $('.datatable').dataTable();
    });}
    onOptionSelected(value: any) {
      if (value.value == 2) {
        this.showOrdinateur = false;
      } else {
        this.showOrdinateur = true;

      }
    }
    ngOnInit(): void {
this.besoinsOrdinateurs=this.besoinservice.getBesoinsOrdinateurs();
this.besoinsImprimantes=this.besoinservice.getBesoinsImprimates();
    }
}
