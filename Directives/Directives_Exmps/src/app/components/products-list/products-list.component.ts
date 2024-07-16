import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as products from './products.json';
import { NgxPaginationModule } from 'ngx-pagination';



@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

 
 DataProducts = (products as any).default;

 p:any;



 sortReverse()
 {
  this.DataProducts.reverse();
 }

 

}
