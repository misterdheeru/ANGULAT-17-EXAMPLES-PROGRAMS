import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../Model/employee';

@Component({
  selector: 'app-empcrud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empcrud.component.html',
  styleUrls: ['./empcrud.component.css']
})
export class EmpcrudComponent  {
  tbldisplay = false;
  employeesList: Employee[] = [];

  constructor(private service: EmployeeService) {}

 

  DisplayEmployeesInformation(): void {
    this.service.getAllEmployees().subscribe({
      next: (response: Employee[]) => {
        setTimeout(() => {
          this.tbldisplay = true;
          this.employeesList = response;
          this.tbldisplay = false;
        }, 2000);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
