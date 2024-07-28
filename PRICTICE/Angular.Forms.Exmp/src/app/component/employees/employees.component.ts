import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

 constructor(private fb : FormBuilder)
 {

 }
 
 myForm = this.fb.group({

  firstName : this.fb.control("",[Validators.required]),
  lastName : this.fb.control("",[Validators.required]),
  age : this.fb.control("",[Validators.required]),
  dob : this.fb.control("",[Validators.required]),
  email : this.fb.control("",[Validators.email]),
  password : this.fb.control("",[Validators.required]),
  gender : this.fb.control("",[Validators.required])
 

 })
 gpsubmit(value:any)
 {
 
  console.log(value)

 }
}
