import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { users } from '../../ModelClass/modelclassdemo';
import { response } from 'express';
import { userInfo } from 'os';

@Component({
  selector: 'app-model-interface',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './model-interface.component.html',
  styleUrl: './model-interface.component.css'
})
export class ModelInterfaceComponent  {

  constructor()
  {
    console.log(this.usersinfor)
  }
  usersinfor :users[]=[
    Emp1:
    {
      username: 'misterdheeru',
      FirstName: 'CHINTHALA',
      SecondName: 'DHEERAJ',
      Password: 'dheeraj24',
      Age: 35,
      Email: 'misterdheeru@gmail.com',
      Address: 'Hydrebad',
      salary:2500,
    },
    Emp2 :
    {
      username: 'rohan24',
      FirstName: 'ROHAN',
      SecondName: 'REDDY',
      Password: 'rohanreddy254',
      Age: 45,
      Email: 'rohanreddy24@gmail.com',
      Address: 'Hydrebad',
      salary:3500,
    }

  ]



  

 




 
}
