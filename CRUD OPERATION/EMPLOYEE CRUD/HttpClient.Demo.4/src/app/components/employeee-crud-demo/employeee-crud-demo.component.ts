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
  Edit=true;
  Post=false;
  Data:any
  ADDHIDE=true

 SingleDATA : any= [];

 HIDDENID =false; 
   
 
  constructor(private service :EmployeeCRUDService)
  {

  }

  @ViewChild("id") ID :any
  @ViewChild("name") NAME :any
  @ViewChild("item") COURSEID :any
  
  ngOnInit(): void {
      this.GetCourses()
  }

  EditEmployees()
  {  this.Edit=false;
    this.Post =true
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
   this.Data = setTimeout(()=>{
   this.service.FetFlechDataOfEmployees().subscribe({
    next:(response)=>{
       
        this.emp = response    
        
        this.Data=false
      
    }
  });
},1000)
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

   this.ADDHIDE = false
  }


EditEmployee(stdid:any)
{
  this.ADDHIDE=false

  this.Post=true
  this.Edit =false
  this.HIDDENID =true
 
  this.service.getSingleEmploeee(stdid).subscribe({
  next:(response)=>{
    this.SingleDATA = response
    
    this.ID.nativeElement.value = this.SingleDATA.StdId
    this.NAME.nativeElement.value = this.SingleDATA.StdName
    this.COURSEID.nativeElement.value = this.SingleDATA.CourseId
   
  },

  error:(err)=>{
  console.log(err)
  }
  })

}
   
AddEmployeeFocus()
{
  this.ID.nativeElement.focus()
  this.ID.nativeElement.value="";
  this.NAME.nativeElement.value="";
   this.GetCourses();
  this.HIDDENID =false
  this.Edit = true
  this.Post =false
}


Finalupdate()
{
  let courses = {
    StdId:this.ID.nativeElement.value,
    StdName:this.NAME.nativeElement.value,
    CourseId:this.COURSEID.nativeElement.value
  }
  this.service.UpdateEmployees(courses.StdId,courses).subscribe({
    next:()=>{
      Swal.fire('UPDATED','Record Is Updated Sucessfully','success')
      this.GetEmployees()
    },
    error:(err)=>{
       console.log(err)
    }
  })
}


}
