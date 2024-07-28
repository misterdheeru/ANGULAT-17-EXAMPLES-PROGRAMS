import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-singleitem',
  standalone: true,
  imports: [],
  templateUrl: './singleitem.component.html',
  styleUrl: './singleitem.component.css'
})
export class SingleitemComponent  implements OnInit{

  constructor(private activatedroute :ActivatedRoute, private service : ProductsService){}
id:any

 ngOnInit(): void {
     this.activatedroute.paramMap.subscribe((res:ParamMap)=>{
      this.id =res.get("id")
      console.log(this.id)
     })

     
 }


}
