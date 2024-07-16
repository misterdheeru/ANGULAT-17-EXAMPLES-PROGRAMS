import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface usersList 
{
 username :string,
 FirstName :string,
 SecondName :string,
 Password  : string,
 mobilenumber:string,
 Age:number,
 gmail:string

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

 

export class AppComponent {
  title = 'ModelInterface.Demo.1';
  constructor()
  {
    console.log(this.users)
  }

  users: usersList={
    username :"ram24",
    FirstName :"RAMA",
    SecondName :"KRISHNA",
    Password  : "123",
    mobilenumber:"9545287512",
    Age:25,
    gmail:"rama@gmail.com"
  } 
  

  }

  


