import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeCrudeService } from '../../services/employee-crude.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal  from 'sweetalert2'; //sweetalert
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { EditComponent } from '../edit/edit.component';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-employee-crud-demo',
  standalone: true,
  imports: [CommonModule ,FormsModule , AddEmpComponent,EditComponent],
  templateUrl: './employee-crud-demo.component.html',
  styleUrl: './employee-crud-demo.component.css'
})
export class EmployeeCrudDemoComponent implements OnInit {

  constructor(private empservices: EmployeeCrudeService, private router : Router) {}
id:any
name:any
item:any
fetch:any
users:any
courses :any
hidvalue:boolean =true;

 
  ngOnInit(): void {

      this.DisplayEmployeeData();
      this.selectcourse();

  }

  selectcourse()
  {
    this.empservices.selectCourse().subscribe(response=>{
      this.courses = response
    })
  }


  DisplayEmployeeData()
  {

     this.empservices.getEmployees().subscribe({
      next:(response:any)=>{
        this.users = response
      },
      error:(err)=>{
        console.log(err)
      }
       
     });
  

  }


  DeleteEmployees(StdId:any)
  {
    
    this.empservices.deleteEmployees(StdId).subscribe({
      next:()=>{
        Swal.fire('Record Deleted','Record Deleted Sucessfully','success')
        this.DisplayEmployeeData()
      },
      error:(err)=>{
        console.log(err)
      }
    })
   
   
     
  }

  reciveData(Data:any)
  {
  let commingData={
    StdId:Data.StdId,
    StdName:Data.StdName,
    CourseId:Data.CourseId
  }
          //INSERTING RECORD 

           if(commingData.CourseId==0)
            {
              Swal.fire(' COURSE','Please Select Course','warning')
            }
            else
            {
              this.empservices.postEmployees(commingData).subscribe({
                next:()=>{
                  Swal.fire('Record Posted','Record Posted Sucessfully','success')
                  this.DisplayEmployeeData();
                },
                error:(err)=>{
                  console.log(err)
                }
              })
            }
      
 
 
 
  }

 
 
}
