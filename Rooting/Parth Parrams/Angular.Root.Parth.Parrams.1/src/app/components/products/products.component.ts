import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(private services :ProductsService){}
  
  products :any = []
  ngOnInit(): void {
      this.services.getProducts().subscribe(res =>{
      this.products = res
      console.log(res)
      })
  }

}
