import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [FormComponent ,CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent  implements OnInit{
DATA:any

constructor(private store :Store<any>)
{
 
}
ngOnInit(): void {
    
 this.fetchdata()

} 
fetchdata()
{
    this.store.select("emp").subscribe(res=>{
    this.DATA = res
    console.log(res)
   })
}
}
