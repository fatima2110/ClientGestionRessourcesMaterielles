import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PagesErrorComponent } from './pages-error/pages-error.component';
import { BesoinComponent } from './departement/besoin/besoin.component';
import { ChefComponent } from './departement/chef/chef.component';
import { DepartementComponent } from './departement/departement.component';
import { EnsignantComponent } from './departement/ensignant/ensignant.component';
import { AuthGuard } from './services/AuthGuard';

const routes: Routes = [
  //{ path: 'departement', loadChildren: () => import('./departement/departement.module').then(m => m.DepartementModule) },
  {path: 'departement',
    component: DepartementComponent,
    canActivate: [AuthGuard],
    //redirectTo:'home',
    //pathMatch:'full',
    children: [
      {
        path: 'gestion-besoins',
        component: ChefComponent,
        canActivate: [AuthGuard]
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
