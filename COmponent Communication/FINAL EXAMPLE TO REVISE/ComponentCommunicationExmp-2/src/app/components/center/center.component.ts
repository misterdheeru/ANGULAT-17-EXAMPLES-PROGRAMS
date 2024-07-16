import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
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
