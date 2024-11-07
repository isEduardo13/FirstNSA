import { CategoriaDTO } from './../../interfaces/categoria.interface';
import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/Producto.interface';
import { AlmacenService } from '../../services/almacen.service';
@Component({
  selector: 'app-almacen-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})


export class ProductoComponent {
  nombre : string ="Pepsi";
  stock : number = 1;
  listaCategorias: CategoriaDTO[] = [];
  productos : string[] = ["Galletas", "Chocolate", "Pulparindo"]

  constructor( private almacenService : AlmacenService){
    this.almacenService.getCategorias().subscribe((categorias => {
      this.listaCategorias = categorias;
      console.log(this.listaCategorias);
    }
    ));
  }
  comprarProducto(): void{
    this.stock--;
  }

  @Input()
  Categoria : CategoriaDTO = {
    id: 0,
    nombreCategoria: "",
  }
  @Input()
  Producto : Producto ={
    nombre :"",
    oferta: false,
    precio: 0,
    precioOferta:0,
    stock:0,
    fecha: new Date()
  }
}

