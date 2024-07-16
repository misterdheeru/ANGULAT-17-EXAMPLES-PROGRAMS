import { Component } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [DataBindingComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
