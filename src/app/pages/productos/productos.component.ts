import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as productosData from '../../../../public/json/productosData.json'
import { Producto } from '../home/utils/productos';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
productosdata: Producto[]=(productosData as any).default;

constructor(private router:Router){}

ngOnInit(): void {}

onClickButton(): void {
  console.log("Boton Precionado");
}
onClickProducto(producto:Producto):void{
  this.router.navigate(["/detalleproductos",producto.id]);


}

}
