import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsbaleComponent } from './pages/responsbale/responsbale.component';
import { FournisseursComponent } from './pages/responsbale/fournisseurs/fournisseurs.component';

import { PropositionsComponent } from './pages/responsbale/propositions/propositions.component';
import { ListenoirComponent } from './pages/responsbale/listenoir/listenoir.component';
import { AppComponent } from './app.component';
import { BesoinComponent } from './departement/besoin/besoin.component';
import { BesoinComponentResponsable } from './pages/responsbale/besoin/besoin.component';
import { EnregistererMatComponent } from './pages/responsbale/enregisterer-mat/enregisterer-mat.component';
import { GestionRessourcesComponent } from './pages/responsbale/gestion-ressources/gestion-ressources.component';

import { LoginComponent } from './login/login.component';
import { PagesErrorComponent } from './pages-error/pages-error.component';
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
import { TechnicienGuard } from './services/TechnicienGuard';
import { ResponsableGuard } from './services/ResponsableGuard';
import { GestionPannesComponent } from './pages/responsbale/gestion-pannes/gestion-pannes.component';

const routes: Routes = [
  {
    path: 'departement',
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
  {
    path: 'service-de-maintenance',
    component: ServiceDeMaintenanceComponent,
    canActivate: [AuthGuard, TechnicienGuard],
    children: [
      {
        path: 'home',
        component: PannesComponent,
        canActivate: [AuthGuard, TechnicienGuard]
      },
      {
        path: 'constat',
        component: AjouterConstatComponent,
        canActivate: [AuthGuard, TechnicienGuard]
      },
      {
        path: 'pannes',
        component: PannesComponent,
        canActivate: [AuthGuard, TechnicienGuard]
      },
      {
        path: 'constats',
        component: ListeConstatsComponent,
        canActivate: [AuthGuard, TechnicienGuard]
      },
      {
        path: 'myProfile',
        component: ProfileComponent,
        canActivate: [AuthGuard, TechnicienGuard]
      }
    ]
  },
  { path: '', component: LoginComponent },
  { path: 'error', component: PagesErrorComponent },
  {
    path: 'responsable',
    component: ResponsbaleComponent,
    canActivate: [AuthGuard, ResponsableGuard],
    children: [
      {
        path: 'fournisseurs',
        component: FournisseursComponent,
        canActivate: [AuthGuard, ResponsableGuard]
      },
      {
        path: 'propositions',
        component: PropositionsComponent,
        canActivate: [AuthGuard, ResponsableGuard]
      },
      {
        path: 'listenoir',
        component: ListenoirComponent,
        canActivate: [AuthGuard, ResponsableGuard]
      },
      {
        path: 'consulterBesoin',
        component: BesoinComponentResponsable,
        canActivate: [AuthGuard, ResponsableGuard]
      },
      {
        path: 'EnregistrerMat',
        component: EnregistererMatComponent,
        canActivate: [AuthGuard, ResponsableGuard]
      },
      {
        path: 'Home',
        component: AppComponent,
        canActivate: [AuthGuard, ResponsableGuard]
      },
      {
        path: 'gestionRessources',
        component: GestionRessourcesComponent,
        canActivate: [AuthGuard, ResponsableGuard]
      },
      {
        path: 'myProfile',
        component: ProfileComponent,
        canActivate: [AuthGuard, ResponsableGuard]
      },
      {
        path: 'compte',
        component: CompteComponent,
        canActivate: [AuthGuard, ResponsableGuard]
      },
      {
        path: 'gestionPannes',
        component: GestionPannesComponent,
        canActivate: [AuthGuard, ResponsableGuard]
      }

    ]
  },
  { path: '**', component: PagesErrorComponent, data: { code:404, message: 'La page demandée est introuvable.' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
