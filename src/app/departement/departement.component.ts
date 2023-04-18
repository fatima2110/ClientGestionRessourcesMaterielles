import { MaterielServiceService } from '../../services/materiel-service.service';
import { Component } from '@angular/core';
import { Materiel } from '../../Modules/materiel';
import { AfterViewInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent  {

  title='Dashboard - Departement';

}

