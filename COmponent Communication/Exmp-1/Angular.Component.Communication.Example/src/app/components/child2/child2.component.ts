import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs :["bchild","achild1","DATA","YearData"]
})
export class Child2Component {
 
  bchild :any
  achild1:any;
  DATA:any;
  YearData :any
  

}
