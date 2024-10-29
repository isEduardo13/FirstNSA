import { NgModule } from "@angular/core";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { CommonModule } from "@angular/common";
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductoComponent } from "./components/producto/producto.component";

@NgModule({
    declarations: [MainPageComponent, ListaProductosComponent,ProductoComponent],
    imports: [CommonModule],
    providers: [],
    bootstrap: [],
    exports:[
      MainPageComponent
    ],

})
export class AlamcenModule {

}
