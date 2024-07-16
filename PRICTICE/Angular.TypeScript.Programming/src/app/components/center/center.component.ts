import { Component } from '@angular/core';
import { ProgrammingComponent } from '../programming/programming.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [ProgrammingComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
