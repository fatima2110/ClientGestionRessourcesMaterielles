import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsbaleComponent } from './pages/responsbale/responsbale.component';
import { FournisseursComponent } from './pages/responsbale/fournisseurs/fournisseurs.component';
import { MessagerieComponent } from './messagerie/messagerie.component';


import { PropositionsComponent } from './pages/responsbale/propositions/propositions.component';
import { ListenoirComponent } from './pages/responsbale/listenoir/listenoir.component';
import { AppComponent } from './app.component';
import { BesoinComponent } from './pages/responsbale/besoin/besoin.component';
import { EnregistererMatComponent } from './pages/responsbale/enregisterer-mat/enregisterer-mat.component';
import { GestionRessourcesComponent } from './pages/responsbale/gestion-ressources/gestion-ressources.component';
import { FournisseurInfoComponent } from './fournisseur-info/fournisseur-info.component';

const routes: Routes = [
  {
    path: '' ,
    component: ResponsbaleComponent,
    children: [
      {
        path: 'fournisseurs' ,
        component: FournisseursComponent
      },
      {
        path: 'propositions' ,
        component: PropositionsComponent
      },
      {
        path: 'listenoir' ,
        component: ListenoirComponent
      },
      {
        path:'consulterBesoin',
        component:BesoinComponent
      },
      {
        path:'EnregistrerMat',
        component:EnregistererMatComponent
      },
       {
        path:'Home',
        component:AppComponent
      },
       {
        path:'gestionRessources',
        component:GestionRessourcesComponent
       },
       {
        path:'messagerie',
        component:MessagerieComponent
       },
       {
        path:'FournissuerInfo',
        component:FournisseurInfoComponent
       }



    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
