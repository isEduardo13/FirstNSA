import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlamcenModule } from './almacen/almacen.module';
@NgModule({
  declarations: [
    AppComponent,

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
