import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username :string ="";

  password  :string ="";
   
constructor(private root :Router )
{

}

 Login()
 {
  sessionStorage.setItem('users', JSON.stringify({username:this.username , password:this.password}));
  this.root.navigate(['/Home'])
 }
 

}
