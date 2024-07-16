import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binded',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-binded.component.html',
  styleUrl: './data-binded.component.css'
})
export class DataBindedComponent {

  Name = "chinthala dheeraj";
  number = 25000;
  DateTime = new Date();
  Employes={
    ID :1 ,
    Name : "Rama",
    Salary : 250000,
    MobileNumber :98459159803,
  }
  
 
   
 
}
