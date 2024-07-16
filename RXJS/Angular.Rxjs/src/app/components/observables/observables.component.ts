import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Observable, from, interval, of, pipe, range, zip } from 'rxjs';
import { filter, map } from 'rxjs/operators'; // Import the map operator

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent {

constructor()
{
  // this.Data.subscribe(
  //   {
  //     next:(res:any)=>{
  //       console.log(res)
  //     }
  //   }
  // )
}

Data = new Observable( 

  (data:any)=>{
    
    data.next("WELCOME TO MY ANGULAR WORLD")
    data.next("RNREDDY IT SCHOOL")
    data.next(25+25)

  }
)



   
arr = [ 10 ,20,30,40,50]

publisher1 =  from(this.arr);

subscribe1 = this.publisher1.subscribe(res=>console.log(res))

createrange = range(1,10)
// subscribe3 = this.createrange.subscribe(res=>console.log(res))


//Filter 
 


 publisher4 = this.createrange.pipe(filter((res:any)=>{
  return  res%2===0
 }))


 publisher5 = this.createrange.pipe(map((res:any)=>{
  return  res*res
 }))

//  subscribe4 = this.publisher4.subscribe(res=>console.log(res))

//  subscribe5 = this.publisher5.subscribe(res=>console.log(res))



p1 = of(21,22,23)
p2 = of("rama","sitha","lava")
p3= of("hyd","channai","tamilnadu")

 combine = zip(this.p1,this.p2,this.p3).pipe(map(([age,name,location])=>{
  return {age,name,location}
 }))



subscribe33 = this.combine.subscribe(res=>console.log(res))
 


  
}
