import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/AuthService';
declare var $: any;


@Component({
  selector: 'app-cnx-comp',
  templateUrl: './cnx-comp.component.html',
  styleUrls: ['./cnx-comp.component.css']
})
export class CnxCompComponent {

  title='Dashboard - Departement';
  login !:any;
  role !:any;
  isChef: boolean = false;
  photo:string='';
  constructor(private authService:AuthService, private router:Router){
    this.login = this.authService.getLogin();
    this.role = this.authService.getRole();
    if (this.role == "CHEF_DEPARTEMENT"){
      this.isChef = true;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      $(document).ready(function() {
        $('#myTable').DataTable();
        //$('.datatable').dataTable();
      });
    },500);
  }
  
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
