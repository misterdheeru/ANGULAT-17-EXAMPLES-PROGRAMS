import { Component, ViewChild } from '@angular/core';
import { EmployeescrudService } from '../../services/employeescrud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { employeecrud } from '../../Models/employeecrud';
 

@Component({
  selector: 'app-employeescrud',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './employeescrud.component.html',
  styleUrl: './employeescrud.component.css'
})
export class EmployeescrudComponent {
 
 @ViewChild("id")ID:any
 @ViewChild("fname")FNAME:any
 @ViewChild("sname")SNAME:any
 @ViewChild("age")AGE:any
 @ViewChild("mob")MOBILE:any
 @ViewChild("email")EMAIL:any
 @ViewChild("date")HigherDate:any
 @ViewChild("dob")DATEOFBIRTH:any
 @ViewChild("male")MALE:any
 @ViewChild("female")FEMAIL:any
 @ViewChild("other")OTHER:any
 @ViewChild("sal")SALARY:any
 @ViewChild("pos")POS:any
 

  empobj : any = { empId : Number , FirtstName : String , LastName : String  ,Age :Number,Mobile:Number  , Email : String , HigherDate : Date , DOB : Date , Gender : String , Salary : Number , PID : Number ,PName:String}
  gender:any
  Hide = true
  position:any
  emp:employeecrud [] = []
  uploadhide=false;
  savehide=true;
  addrecord=true
  constructor(private service : EmployeescrudService)
  {
              this.DisplayEMployeeList()   
              this.DisplayPossitionList()                                                            
  }

  DisplayEMployeeList()  
  {
     this.service.getEmployees().subscribe(
      {
        next:(res:employeecrud[])=>{
        this.emp =res
        }
      }
     )
  }

  DisplayPossitionList()
  {
    this.service.getPositions().subscribe({
      next:(res)=>{
      this.position=res
      }
    })
  }

  PostEmployeesInforamtion()
  {
    if(this.MALE.nativeElement.checked)
      {
      this.gender = "Male"
      }
      if(this.FEMAIL.nativeElement.checked)
        {
          this.gender ="Female";
        }
        if(this.OTHER.nativeElement.checked)
          {
            this.gender ="Other"
          }




   this.empobj = {
      empId : this.ID.nativeElement.value,
      FirtstName :this.FNAME.nativeElement.value,
      LastName :this.SNAME.nativeElement.value,
      Age :this.AGE.nativeElement.value,
      Mobile:this.MOBILE.nativeElement.value,
      Email:this.EMAIL.nativeElement.value,
      HigherDate:this.HigherDate.nativeElement.value,
      DOB :this.DATEOFBIRTH.nativeElement.value,
      Gender : this.gender,
      Salary:this.SALARY.nativeElement.value,
      PID : this.POS.nativeElement.value,
      
    } 

     

      this.service.postremployees(this.empobj).subscribe({
        next:()=>{
         this.DisplayEMployeeList();
        }
      })
  }


  DeleteEmployeeRecord(id:any)
  {
    this.addrecord = false
    this.service.DeleteEmployee(id).subscribe({
      next:()=>{
        this.DisplayEMployeeList()
      }
    })
  }

  EditemployeesInfo(id:any)
  {
    this.addrecord=false

    this.savehide=false
    this.uploadhide =true
    this.service.EditEmployees(id).subscribe({
     next:(res)=>{

      this.DisplayPossitionList()   
    
        this.empobj = res



      this.ID.nativeElement.readOnly  =true
      this.ID.nativeElement.backgroundColor ="gray"
      this.ID.nativeElement.value =   this.empobj.empId;
      this.FNAME.nativeElement.value =this.empobj.FirtstName;
      this.SNAME.nativeElement.value = this.empobj.LastName;
      this.AGE.nativeElement.value = this.empobj.Age;
      this.MOBILE.nativeElement.value = this.empobj.Mobile;
      this.EMAIL.nativeElement.value = this.empobj.Email;
      
      this.HigherDate.nativeElement.value = this.formatDate(this.empobj.HigherDate);
      this.DATEOFBIRTH.nativeElement.value =  this.formatDate(this.empobj.DOB);

 
     

      if(this.empobj.Gender =="Male")
        {
        this.MALE.nativeElement.checked = true
        }
        if(this.empobj.Gender =="Female")
          {
          this.FEMAIL.nativeElement.checked = true
          }
          if(this.empobj.Gender =="Other")
            {
            this.OTHER.nativeElement.checked = true
            }
  
      this.SALARY.nativeElement.value = this.empobj.Salary;
      this.POS.nativeElement.value = this.empobj.PID;
     
       
     

      console.log(res)
     }
    })
  }
  formatDate(date: any): string {
    const d = new Date(date);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    return `${d.getFullYear()}-${month}-${day}`;
  }
  saverecord()
  {
    if(this.MALE.nativeElement.checked)
      {
      this.gender = "Male"
      }
      if(this.FEMAIL.nativeElement.checked)
        {
          this.gender ="Female";
        }
        if(this.OTHER.nativeElement.checked)
          {
            this.gender ="Other"
          }


    this.empobj = {
      empId : this.ID.nativeElement.value,
      FirtstName :this.FNAME.nativeElement.value,
      LastName :this.SNAME.nativeElement.value,
      Age :this.AGE.nativeElement.value,
      Mobile:this.MOBILE.nativeElement.value,
      Email:this.EMAIL.nativeElement.value,
      HigherDate:this.HigherDate.nativeElement.value,
      DOB :this.DATEOFBIRTH.nativeElement.value,
      Gender : this.gender,
      Salary:this.SALARY.nativeElement.value,
      PID : this.POS.nativeElement.value,

    }

    this.service.saveemp(this.empobj).subscribe({
      next:()=>{
        this.DisplayEMployeeList()
      }
    })
  }
  addrecordsearase()
  {
    this.addrecord = true
    this.savehide = true
    this.uploadhide = false
    this.ID.nativeElement.value=null;
    this.ID.nativeElement.readOnly=false;
    this.ID.nativeElement.focus();
    this.FNAME.nativeElement.value="";
    this.SNAME.nativeElement.value="";
    this.AGE.nativeElement.value=null;
    this.MOBILE.nativeElement.value=null;
    this.EMAIL.nativeElement.value="";
    this.HigherDate.nativeElement.value="";
    this.DATEOFBIRTH.nativeElement.value="";
    this.MALE.nativeElement.checked=false;
    this.FEMAIL.nativeElement.checked=false;
    this.OTHER.nativeElement.checked=false;
    this.SALARY.nativeElement.value=null;
    this.POS.nativeElement.value =   0
  }
}
