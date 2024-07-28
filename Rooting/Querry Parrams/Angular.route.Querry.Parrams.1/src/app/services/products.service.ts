import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient : HttpClient) { }

  getProducts()
  {
    return this.httpclient.get("https://fakestoreapi.com/products")
  }

  getSingleProduct(ID:number)
  {
    return this.httpclient.get(`https://fakestoreapi.com/products/${ID}`)
  }


}
