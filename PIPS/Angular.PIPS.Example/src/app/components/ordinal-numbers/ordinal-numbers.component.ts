import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalNumberPipe } from '../../pips/ordinal-number.pipe';

@Component({
  selector: 'app-ordinal-numbers',
  standalone: true,
  imports: [CommonModule,FormsModule,OrdinalNumberPipe],
  templateUrl: './ordinal-numbers.component.html',
  styleUrl: './ordinal-numbers.component.css'
})
export class OrdinalNumbersComponent {

  Numb ="";

  
}
