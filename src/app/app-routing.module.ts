import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartementComponent} from './departement/departement.component'
import { EnsignantComponent } from './departement/ensignant/ensignant.component';
import { BesoinComponent } from './departement/besoin/besoin.component';
import { ChefComponent } from './departement/chef/chef.component';
const routes: Routes = [
{path:'dashboard',component:DepartementComponent},
{path:'gestion-besoins',component:ChefComponent},
{path:'home',component:EnsignantComponent},
{path:'besoin',component:BesoinComponent},
{path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
