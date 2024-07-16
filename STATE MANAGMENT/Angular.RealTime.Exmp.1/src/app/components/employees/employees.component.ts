import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { empid, empsalary, empupdatename } from '../../State-Management/Actions/Actions';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent  implements OnInit{
  @ViewChild("id")Id :any
  @ViewChild("name") Name:any
  @ViewChild("salary") Salary:any

  constructor(private store  : Store<any>)
  {
  
  }
 ngOnInit(): void {
 
 }
  Display()
  {
    this.store.select("Employees").subscribe(res=>console.log(res))
  }
  
  submit()
  {
    this.store.dispatch(empupdatename({Name:this.Name.nativeElement.value}))
    this.store.dispatch(empid({Id:this.Id.nativeElement.value}))
    this.store.dispatch(empsalary({Salary:this.Salary.nativeElement.value}))
    this.Display()
    
  }

}
