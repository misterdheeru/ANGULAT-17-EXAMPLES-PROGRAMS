import { Component } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { DataBandingTask2Component } from '../../data-banding-task-2/data-banding-task-2.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [DataBindingComponent,DataBandingTask2Component],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
