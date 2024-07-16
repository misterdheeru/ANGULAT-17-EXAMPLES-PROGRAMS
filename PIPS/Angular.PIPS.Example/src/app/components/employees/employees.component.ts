import { Component } from '@angular/core';
import { EmployeesPipe } from '../../pips/employees.pipe';
import *as EmployeesData from './EmployeesData.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [EmployeesPipe,CommonModule,FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  emp = (EmployeesData as any).default;
}
