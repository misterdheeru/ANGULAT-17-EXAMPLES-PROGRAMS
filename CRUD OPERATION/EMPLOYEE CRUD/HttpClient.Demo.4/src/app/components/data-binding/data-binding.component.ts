import { Component } from '@angular/core';
import { EmployeeeCrudDemoComponent } from '../employeee-crud-demo/employeee-crud-demo.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [EmployeeeCrudDemoComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

}
