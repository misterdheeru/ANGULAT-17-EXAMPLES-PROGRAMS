import { Component } from '@angular/core';
import { DataBindComponent } from '../data-bind/data-bind.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [DataBindComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
