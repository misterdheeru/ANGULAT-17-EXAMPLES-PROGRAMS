import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit{
 products:any = []
 
 constructor(private httpclient : HttpClient)
 {

 }
 ngOnInit(): void {
     
  this.getproducte()
 }

 getproducte()
 {
 this.httpclient.get("https://fakestoreapi.com/products").subscribe({
  next:(res=> {
    this.products=res
  })
 })
 }
 
}
