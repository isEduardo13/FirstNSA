import { Producto } from './../../interfaces/Producto.interface';
import { Component } from '@angular/core';
import { ProductoComponent } from '../../components/producto/producto.component';
import { AlmacenService } from '../../services/almacen.service';

@Component({
  selector: 'app-almacen-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
listaProductos: Producto []=[];
constructor(alacenService : AlmacenService){
  this.listaProductos = alacenService.listaProductos;
}


}
