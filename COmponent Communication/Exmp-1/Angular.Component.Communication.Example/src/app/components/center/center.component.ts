import { Component } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [DataBindingComponent,ParentComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
