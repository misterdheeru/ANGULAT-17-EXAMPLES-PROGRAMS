import { Component } from '@angular/core';
import { filter, map, pipe } from 'rxjs';

@Component({
  selector: 'app-methods',
  standalone: true,
  imports: [],
  templateUrl: './methods.component.html',
  styleUrl: './methods.component.css'
})
export class MethodsComponent {
 
  Employee =  [
    {
      ID :1,
      NAME : "GOPI",
      NUMBER : 984515489,
      SALARY : 200,
      GMAIL :"rama@gmail.com"
    },
    {
      ID :1,
      NAME : "KRISHNA",
      NUMBER : 984515489,
      SALARY : 500,
      GMAIL :"rama@gmail.com"
    },
    {
      ID :1,
      NAME : "RAMA",
      NUMBER : 984515489,
      SALARY : 2500,
      GMAIL :"rama@gmail.com"
    }
  ]
  arr :any []= []
  constructor()
  {
   
     
     
  let DATA =  this.Employee.map(res=>{
       
  
       if(res.NAME=="RAMA")
       {
        return this.arr.push(res)   
       }
       else
       return res
 
    
      
    })
   console.log(DATA) 
   console.log("THIS IS ARRA" ,this.arr) 
  }
  
 
  

}
