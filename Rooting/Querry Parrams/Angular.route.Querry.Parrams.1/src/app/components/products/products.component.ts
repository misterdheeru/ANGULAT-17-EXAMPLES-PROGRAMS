import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit{
  products:any
constructor(private service : ProductsService){}
 
ngOnInit(): void {
    this.service.getProducts().subscribe(res=>{
      this.products=res
      console.log(res)
    }
    
    )
}

}
