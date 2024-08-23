import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Producto } from './utils/productos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  imagenesEmpresariales = [
    { src: 'imagenes/empresa.png', alt: 'Imagen Empresarial' },
  ];

  ofertas = [
    { src: 'imagenes/oferta1.png', alt: 'Oferta 1' },
    { src: 'imagenes/oferta2.png', alt: 'Oferta 2' },
    { src: 'imagenes/oferta3.png', alt: 'Oferta 3' },
  ];

  productos = [
    { src: 'imagenes/producto1.png', alt: 'Producto 1' },
    { src: 'imagenes/producto2.png', alt: 'Producto 2' },
    { src: 'imagenes/producto3.png', alt: 'Producto 3' },
  ];

  constructor(private router: Router) {}

  verProducto(productId: string): void {
    this.router.navigate(['/producto', productId]);
  }
  

}
