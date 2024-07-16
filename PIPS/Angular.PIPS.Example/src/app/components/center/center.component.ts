import { Component } from '@angular/core';
import { DataBindedComponent } from '../data-binded/data-binded.component';
import { CustomPipComponent } from '../custom.pip/custom.pip.component';
import { DropdownPipComponent } from '../dropdown-pip/dropdown-pip.component';
import { OrdinalNumbersComponent } from '../ordinal-numbers/ordinal-numbers.component';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [DataBindedComponent,CustomPipComponent,DropdownPipComponent,OrdinalNumbersComponent,EmployeesComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
