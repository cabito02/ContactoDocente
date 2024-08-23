import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Producto } from '../home/utils/productos';
import * as productosData from '../../../../public/json/productosData.json';

@Component({
  selector: 'app-detalleproductos',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './detalleproductos.component.html',
  styleUrls: ['./detalleproductos.component.css']
})
export class DetalleproductosComponent {

  producto?: Producto;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.producto = (productosData as any as Producto[])
        .find((producto) => producto.id === Number(id));
    });
  }
}
