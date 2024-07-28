import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  standalone: true,
  imports: [],
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent implements OnInit{
 
 constructor(private activatedroute : ActivatedRoute){}

  product:any =[]

  ngOnInit(): void {
      this.activatedroute.queryParamMap.subscribe(res=>{
      this.product = res.get("title")
      console.log(this.product)
      })
  }

}
