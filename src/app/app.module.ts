import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartementComponent } from './departement/departement.component';
import { EnsignantComponent } from './departement/ensignant/ensignant.component';
import { ImprimanteComponent } from './imprimante/imprimante.component';
import { DatePipe } from '@angular/common';
import { BesoinComponent } from './departement/besoin/besoin.component';
import { FormsModule } from '@angular/forms';
import { ChefComponent } from './departement/chef/chef.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    EnsignantComponent,
    ImprimanteComponent,
    BesoinComponent,
    ChefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [DepartementComponent]
})
export class AppModule { }
