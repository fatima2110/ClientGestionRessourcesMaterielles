import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './pages/dashboardRespo/dashboard.component';

import { FournisseursComponent } from './pages/responsbale/fournisseurs/fournisseurs.component';
import { PropositionsComponent } from './pages/responsbale/propositions/propositions.component';
import { ListenoirComponent } from './pages/responsbale/listenoir/listenoir.component';
import { BesoinComponent } from './pages/responsbale/besoin/besoin.component';
import { EnregistererMatComponent } from './pages/responsbale/enregisterer-mat/enregisterer-mat.component';
import { GestionRessourcesComponent } from './pages/responsbale/gestion-ressources/gestion-ressources.component';
import { ResponsbaleComponent } from './pages/responsbale/responsbale.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { FournisseurInfoComponent } from './fournisseur-info/fournisseur-info.component';


@NgModule({
  declarations: [
    AppComponent,
    
   
    DashboardComponent,
 
    FournisseursComponent,
    PropositionsComponent,
    ListenoirComponent,
    ResponsbaleComponent,
    EnregistererMatComponent,
    BesoinComponent,
    GestionRessourcesComponent,
    MessagerieComponent,
    FournisseurInfoComponent
    
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
