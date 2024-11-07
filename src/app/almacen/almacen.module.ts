import { NgModule } from "@angular/core";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { CommonModule } from "@angular/common";
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductoComponent } from "./components/producto/producto.component";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { provideHttpClient } from "@angular/common/http";

@NgModule({
    declarations: [MainPageComponent, ListaProductosComponent,ProductoComponent, NotFoundComponent],
    imports: [CommonModule, RouterModule],
    providers: [provideHttpClient()],
    bootstrap: [],
    exports:[
      MainPageComponent
    ],

})
export class AlamcenModule {

}
