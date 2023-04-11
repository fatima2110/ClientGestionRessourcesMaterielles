import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartementComponent} from './departement/departement.component'
import { EnsignantComponent } from './departement/ensignant/ensignant.component';
import { BesoinComponent } from './departement/besoin/besoin.component';
import { ChefComponent } from './departement/chef/chef.component';
const routes: Routes = [
{path:'home',component:DepartementComponent,title:"Home"},
{path:'gestion-besoins',component:ChefComponent,title:"Gestion des besoins"},
{path:'dashboard',component:EnsignantComponent,title:"Tableau de Bord"},
{path:'besoin',component:BesoinComponent,title:"Les besoins"},
{path:'',redirectTo:'dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
