import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addEmployee, deleteEmployee, getEmployees } from '../../State-Management/Actions/EmployeeAction';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../Modal/Employees';
import { EmployeesCrudeService } from '../../Services/employees-crude.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit  {

  @ViewChild("id") ID:any
  @ViewChild("name") NAME:any
  @ViewChild("cid") CID:any
  emp:any []= []

  

  constructor(private store :Store<any> ,private service : EmployeesCrudeService)
  {

  }
  
  ngOnInit(): void {
     this.store.dispatch(getEmployees())

  // this.fetchemployee()
     
     this.store.select("Employee").subscribe((res)=>{
      console.log(res.employees)
      this.emp = res.employees
     })
  }
  add()
  {
    let newEmployee: Employee = {
      StdId: this.ID.nativeElement.value,
      StdName: this.NAME.nativeElement.value,
      CourseId: this.CID.nativeElement.value,
      CourseName: "", // Set CourseName as needed
    };
    this.store.dispatch(addEmployee({employees:newEmployee}));
    // this.fetchemployee()
  }
  delete(id:number)
  {
    this.store.dispatch(deleteEmployee({empid:id}))
  }
}
