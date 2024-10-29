import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstNSA';

  Phantom= 'Phantom gay';
  nombreProducto: string = 'MacbookAirPro';
  stock : number = 5;

  comprarProducto() : void{
    this.stock--;
  }

  productos : string [] = ['MacbookAirPro', 'IphoneX', 'MonitorSamsung'];

}
