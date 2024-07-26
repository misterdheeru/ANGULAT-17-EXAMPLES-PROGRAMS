import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { DatabindingComponent } from '../databinding/databinding.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [Child1Component ,DatabindingComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
