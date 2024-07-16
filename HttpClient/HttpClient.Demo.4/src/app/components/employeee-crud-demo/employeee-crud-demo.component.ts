import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { EmployeeCRUDService } from '../../services/employee-crud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employeee-crud-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employeee-crud-demo.component.html',
  styleUrl: './employeee-crud-demo.component.css'
})
export class EmployeeeCrudDemoComponent  implements OnInit{

  

  id:any
  name:any
  item:any
  Display=true;
  emp:any
  courses:any
  constructor(private service :EmployeeCRUDService)
  {

  }

  @ViewChild("id") ID :any
  @ViewChild("name") NAME :any
  @ViewChild("item") COURSEID :any
  
  ngOnInit(): void {
      this.GetCourses()
  }

  
  PostEmployees()

  {
    let courses = {
      StdId:this.ID.nativeElement.value,
      StdName:this.NAME.nativeElement.value,
      CourseId:this.COURSEID.nativeElement.value
    }

   if(courses.CourseId==0)
    {
      Swal.fire('SELECT COURSE','Please Select ','warning')
    }
    else
    {

      this.service.InsertEmployees(courses).subscribe({
        next:()=>{      
          Swal.fire('EMPLOYEE ADDED','Record Is Added Sucessfully','success')
          this.GetEmployees()
        },
        error:(err)=>
          {
            console.log(err)
          }
      })
    }

  }

  GetCourses()
  {
    this.service.FetchDropDownList().subscribe({
      next:(response)=>{
        this.courses = response
      }
    })
  }

  GetEmployees()
  {
   this.Display=false
   this.service.FetFlechDataOfEmployees().subscribe({
    next:(response)=>{
     this.emp = response
    }
  });

  }

  DeleteEmployees(sid:any)
  {
    this.service.DeleteEmployees(sid).subscribe({
      next:()=>{

        Swal.fire('DELEATED','Record Is Deleated Sucessfully','success')
        this.GetEmployees()
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
   
   


}
