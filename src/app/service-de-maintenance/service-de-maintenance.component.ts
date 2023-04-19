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
  constructor(private authService:AuthService, private router:Router){
    this.login = this.authService.getLogin();
    this.role = this.authService.getRole();
  }

  ngAfterViewInit(): void {
    $(document).ready(function() {
      $('#myTable').DataTable();
    });}
  
  async signOut() {
    try {
      const resp = await firstValueFrom(this.authService.singOut());
      console.log(resp);
      const code = resp.status;
      if (code === 200) {
        this.authService.setIsLoggedIn("false");
          this.authService.setId("");
          this.authService.setLogin("");
          this.authService.setRole("");
          this.authService.setToken("");
          this.router.navigate([""]);
      } 
    } catch (err) {
      console.log(err);
      if (err instanceof HttpErrorResponse) {
        const code = err.status;
        if (code === 200) {
          this.authService.setIsLoggedIn("false");
          this.authService.setId("");
          this.authService.setLogin("");
          this.authService.setRole("");
          this.authService.setToken("");
          this.router.navigate([""]);
        } 
      }
    }
  }

}
