import { Component } from '@angular/core';
import { Child1Component } from '../child-1/child-1.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParentComponent } from '../parent/parent.component';
 

@Component({
  selector: 'app-data-bind',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './data-bind.component.html',
  styleUrl: './data-bind.component.css'
})
export class DataBindComponent {
 



}
