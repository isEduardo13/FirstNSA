export interface Producto{
  nombre :string,
  precio: number,
  stock:number,
  oferta:boolean,
  precioOferta?: number,
  fecha? : Date,
  imagen? : string;

}
