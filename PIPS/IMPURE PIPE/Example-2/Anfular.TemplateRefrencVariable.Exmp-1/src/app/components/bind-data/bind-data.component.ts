import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '../../pips/sort.pipe';

@Component({
  selector: 'app-bind-data',
  standalone: true,
  imports: [CommonModule,FormsModule,SortPipe],
  templateUrl: './bind-data.component.html',
  styleUrl: './bind-data.component.css'
})
export class BindDataComponent {

  number1: any = [60,40,10,50,80,20,70,30,90,100]
  // Names :any = ["C","A","F","B","D","E"]
  number2: any = [60,40,10,50,80,20,70,30,90,100]

  
}
