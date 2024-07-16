import { Component } from '@angular/core';
import { EmployeeCrudDemoComponent } from '../employee-crud-demo/employee-crud-demo.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [EmployeeCrudDemoComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
