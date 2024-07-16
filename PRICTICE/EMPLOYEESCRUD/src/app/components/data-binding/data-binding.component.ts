import { Component } from '@angular/core';
import { EmployeescrudComponent } from '../employeescrud/employeescrud.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [EmployeescrudComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

}
