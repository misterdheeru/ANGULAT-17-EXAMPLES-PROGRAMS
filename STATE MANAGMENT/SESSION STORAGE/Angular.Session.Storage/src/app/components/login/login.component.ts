import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 constructor(private formbulder:FormBuilder ,private router : Router)
 {

 }

  myform=this.formbulder.group({
     username : new FormControl(),
     password : new FormControl()
  })
  submit(value:any)
  {
     
     sessionStorage.setItem("username",value.username)
    
  
    let userinformation  = {user : value.username , pwd:value.password}
     
     this.router.navigateByUrl("/home");
    console.log(userinformation)
  }
}
