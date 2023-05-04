import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../services/AuthService';
declare var $: any;

@Component({
  selector: 'app-service-de-maintenance',
  templateUrl: './service-de-maintenance.component.html',
  styleUrls: ['./service-de-maintenance.component.css']
})
export class ServiceDeMaintenanceComponent {
  title='Dashboard - Service de Maintenance';

  login !:any;
  role !:any;
  photo:string='';
  constructor(private authService:AuthService, private router:Router){
    this.login = this.authService.getLogin();
    this.role = this.authService.getRole();
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      $(document).ready(function() {
        $('#myTable').DataTable();
        //$('.datatable').dataTable();
      });
    },500);
  }
  
  signOut() {
    this.authService.singOut();
  }

}
