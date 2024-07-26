import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {

  EmployeesList :any [] = []

  constructor(private store : Store<any>)
  {

  }

  ngOnInit(): void {
      
    this.store.select("Employee").subscribe(
      {
        next:(res=>{
          console.log(res.Employees)
        })
      }
    )
  }


}
