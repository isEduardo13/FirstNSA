import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlamcenModule } from './almacen/almacen.module';
import { PrincipalComponent } from './principal/principal.component';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlamcenModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
