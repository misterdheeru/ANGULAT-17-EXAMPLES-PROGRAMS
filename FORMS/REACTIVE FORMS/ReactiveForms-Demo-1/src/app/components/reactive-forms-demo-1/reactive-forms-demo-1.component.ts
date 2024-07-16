import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-demo-1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms-demo-1.component.html',
  styleUrls: ['./reactive-forms-demo-1.component.css']
})
export class ReactiveFormsDemo1Component {


  login = new FormGroup({
    user: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    pwd: new FormControl(null, [Validators.required ,  Validators.minLength(8)])
  });

  
  loginuser() {
    if(this.login.valid)
      {
        console.log(this.login.value)
        console.log(`username : ${this.login.get('user')?.value}`)
        console.log(`password : ${this.login.get('pwd')?.value}`)
        
      }
      else
      {
        console.log("Invalide Users")
      }
  }
}
