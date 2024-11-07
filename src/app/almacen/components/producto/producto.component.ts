import { CategoriaDTO } from './../../interfaces/categoria.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/Producto.interface';
import { AlmacenService } from '../../services/almacen.service';
@Component({
  selector: 'app-almacen-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})


export class ProductoComponent implements OnInit{

  constructor(){}


  @Input()
  producto : Producto = {
    nombre: "",
    oferta : false,
    precio : 0,
    precioOferta : 0,
    stock : 0,
  };
  ngOnInit(): void {

  }


}

