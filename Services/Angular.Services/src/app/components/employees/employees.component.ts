import { Component, ViewChild, viewChild } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  emp:any;
  @ViewChild("btn1") Btn1:any
  @ViewChild("btn2") Btn2:any
  @ViewChild("btn3") Btn3:any
  constructor(private Employee : EmployeesService)
  {


  }
 
  Display()
  {
    this.Btn2.nativeElement.style.color="";
    this.Btn2.nativeElement.style.backgroundColor="";
 
    this.Btn1.nativeElement.style.color="white";
    this.Btn1.nativeElement.style.backgroundColor="blue";
    this.emp = this.Employee.getMissOrMr()
    this.Btn3.nativeElement.style.color="";
    this.Btn3.nativeElement.style.backgroundColor="";
  }
  Male()
  {
    this.Btn1.nativeElement.style.color="";
    this.Btn1.nativeElement.style.backgroundColor="";
    this.Btn2.nativeElement.style.color="white";
    this.Btn2.nativeElement.style.backgroundColor="blue";
    this.emp = this.Employee.getMaleEmployees()
    this.Btn3.nativeElement.style.color="";
    this.Btn3.nativeElement.style.backgroundColor="";
  }

  Female()
  {
    this.Btn1.nativeElement.style.color="";
    this.Btn1.nativeElement.style.backgroundColor="";
    this.Btn2.nativeElement.style.color="";
    this.Btn2.nativeElement.style.backgroundColor="";
    this.Btn3.nativeElement.style.color="white";
    this.Btn3.nativeElement.style.backgroundColor="blue";
    this.emp = this.Employee.getFemaleEmployee()
  }
}
