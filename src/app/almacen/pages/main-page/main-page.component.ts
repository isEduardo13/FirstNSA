import { AlmacenService } from './../../services/almacen.service';
import { Producto } from './../../interfaces/Producto.interface';
import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../../components/producto/producto.component';
import { CategoriaDTO } from '../../interfaces/categoria.interface';
@Component({
  selector: 'app-almacen-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit{
listaCategorias: CategoriaDTO[] = [];
listaProductos: Producto[] = [];

constructor(private almacenService: AlmacenService) {
  this.listaProductos = almacenService.listaProductos;
  this.almacenService.getCategorias().subscribe(categorias => {
    this.listaCategorias = categorias;
    console.log(categorias);
  });
}

ngOnInit(): void {


}

}
