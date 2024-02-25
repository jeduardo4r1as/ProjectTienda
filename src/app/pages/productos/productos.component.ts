import { ProductServices } from './../../api/ProductoServices.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../model/Producto.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {


  readonly productsSvs = inject(ProductServices);
  products$ = this.productsSvs.getAllProductos();
}
