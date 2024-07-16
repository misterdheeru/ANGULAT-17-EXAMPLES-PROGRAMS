import { Component } from '@angular/core';
import { Child1Component } from '../child-1/child-1.component';
import { Child2Component } from '../child-2/child-2.component';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [EmployeesComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
