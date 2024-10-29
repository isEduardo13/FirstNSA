import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/Producto.interface';

@Component({
  selector: 'app-almacen-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})


export class ProductoComponent {
  nombre : string ="Pepsi";
  stock : number = 1;

  productos : string[] = ["Galletas", "Chocolate", "Pulparindo"]

  comprarProducto(): void{
    this.stock--;
  }

  @Input()
  Producto : Producto ={
    nombre :"Sin nombre",
    oferta: false,
    precio: 0,
    precioOferta:0,
    stock:0,
    fecha: new Date()
  }
}

