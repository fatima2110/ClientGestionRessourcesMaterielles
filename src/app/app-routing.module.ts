import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PagesErrorComponent } from './pages-error/pages-error.component';
import { BesoinComponent } from './departement/besoin/besoin.component';
import { ChefComponent } from './departement/chef/chef.component';
import { DepartementComponent } from './departement/departement.component';
import { EnsignantComponent } from './departement/ensignant/ensignant.component';
import { AuthGuard } from './services/AuthGuard';
import { AjouterConstatComponent } from './service-de-maintenance/ajouter-constat/ajouter-constat.component';
import { ServiceDeMaintenanceComponent } from './service-de-maintenance/service-de-maintenance.component';
import { PannesComponent } from './service-de-maintenance/pannes/pannes.component';
import { ListeConstatsComponent } from './service-de-maintenance/liste-constats/liste-constats.component';
import { CompteComponent } from './compte/compte.component';
import { ProfileComponent } from './profile/profile.component';
import { ChefDepartementGuard } from './services/ChefDepartementGuard';

const routes: Routes = [
  {path: 'departement',
    component: DepartementComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'gestion-besoins',
        component: ChefComponent,
        canActivate: [AuthGuard, ChefDepartementGuard]   
      },
      {
        path: 'home',
        component: EnsignantComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'besoin',
        component: BesoinComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'compte',
        component: CompteComponent,
        canActivate: [AuthGuard, ChefDepartementGuard]
      },
      {
        path: 'myProfile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {path: 'service-de-maintenance',
    component: ServiceDeMaintenanceComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: PannesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'constat',
        component: AjouterConstatComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'pannes',
        component: PannesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'constats',
        component: ListeConstatsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'myProfile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: '', component: LoginComponent },
  { path: 'error', component: PagesErrorComponent },
  { path: '**', component: PagesErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
