import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent implements OnInit {

  productlist :any ;
  id:any
  constructor( private activatedroute : ActivatedRoute, private httpclient : HttpClient)
  {

  }

  ngOnInit(): void {
       this.queryparrrams()
  }

  //USING WITH PARTH PARRAM

  // parthparrams() 
  // {
  //   this.activatedroute.params.subscribe({
  //     next:(res=>{
  //     this.id  = res[ 'id']
  //     this.httpclient.get(`https://fakestoreapi.com/products/${this.id}`).subscribe({
  //       next:(result =>{
  //         this.productlist =result
  //       })
  //    })
  //   })
  //   })
    
    
  // }

  queryparrrams()
  {
     this.activatedroute.queryParams.subscribe(res=>{
        this.productlist = res
     })
  }
}
