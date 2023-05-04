import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';
import { firstValueFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-responsbale',
  templateUrl: './responsbale.component.html',
  styleUrls: ['./responsbale.component.css']
})
export class ResponsbaleComponent {
  title = 'Dashboard - Departement';
  login !: any;
  role !: any;
  isChef: boolean = false;
  photo: string = '';
  constructor(private authService: AuthService, private router: Router) {
    this.login = this.authService.getLogin();
    this.role = this.authService.getRole();
    if (this.role == "CHEF_DEPARTEMENT") {
      this.isChef = true;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      $(document).ready(function () {
        $('#myTable').DataTable();
        //$('.datatable').dataTable();
      });
    }, 500);
  }

  signOut() {
    this.authService.singOut();
  }

}
