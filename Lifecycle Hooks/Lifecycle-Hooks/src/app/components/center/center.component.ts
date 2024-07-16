import { Component } from '@angular/core';
import { DatabindComponent } from '../databind/databind.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [DatabindComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
