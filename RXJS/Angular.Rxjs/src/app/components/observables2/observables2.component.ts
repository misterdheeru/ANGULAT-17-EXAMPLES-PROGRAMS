import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';
import { response } from 'express';
import { map  , forkJoin, of, mergeMap, toArray} from 'rxjs';

@Component({
  selector: 'app-observables2',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './observables2.component.html',
  styleUrl: './observables2.component.css'
})
export class Observables2Component {

  emp :any
constructor(private httpclient :HttpClient)
{

 
  // this.forkjoin1()

}
 




 //FINAL EXMP FORKJOIN

//  forkjoin1()
//  {
//  let api1 =  this.httpclient.get("http://localhost/EMPLOYEECRUD/api/Position");
 
//  let api2 = this.httpclient.get("http://localhost/EMPLOYEECRUD/api/Employees")  ;



 
//   forkJoin([api1,api2]).subscribe({
//     next:(([positions,employees] : [any,any])=>{

//       this.emp = employees.map((employees:any)=>{
        
//         let pos = positions.find((positions:any)=>positions.PId==employees.PId)
//         console.log(pos)
     
//         return { ...employees, positionName:   pos.PName  , posid : pos.PId  };

         
//       })
    
//     })
//   })

//  }








// fockJoin2()
// {

//   let id = [1,2,3,4,5]

//  let api2 = this.httpclient.get("http://localhost/EMPLOYEECRUD/api/Employees/")  


//  let users = id.map((id)=>{

//   return   this.httpclient.get(`http://localhost/EMPLOYEECRUD/api/Employees/${id}`)
//  })

//  let join =  forkJoin(users).subscribe((res1)=>{
//   console.log(res1)
//  })

// }


 
 }

