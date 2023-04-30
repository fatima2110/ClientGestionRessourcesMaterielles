import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menuRespo/menu.component';
import { DashboardComponent } from './pages/dashboardRespo/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FournisseursComponent } from './pages/responsbale/fournisseurs/fournisseurs.component';
import { PropositionsComponent } from './pages/responsbale/propositions/propositions.component';
import { ListenoirComponent } from './pages/responsbale/listenoir/listenoir.component';
import { BesoinComponent } from './pages/responsbale/besoin/besoin.component';
import { EnregistererMatComponent } from './pages/responsbale/enregisterer-mat/enregisterer-mat.component';
import { GestionRessourcesComponent } from './pages/responsbale/gestion-ressources/gestion-ressources.component';
import { ResponsbaleComponent } from './pages/responsbale/responsbale.component';


@NgModule({
  declarations: [
    AppComponent,
    
    MenuComponent,
    DashboardComponent,
    HeaderComponent,
    FournisseursComponent,
    PropositionsComponent,
    ListenoirComponent,
    ResponsbaleComponent,
    EnregistererMatComponent,
    BesoinComponent,
    GestionRessourcesComponent
    
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
