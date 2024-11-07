import { MainPageComponent } from './almacen/pages/main-page/main-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './almacen/pages/not-found/not-found.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path:"",component:PrincipalComponent},
  {path:"Almacen",component:MainPageComponent},
  {path:"**",component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
