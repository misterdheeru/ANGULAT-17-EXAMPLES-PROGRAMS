import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pip-exmp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pip-exmp.component.html',
  styleUrl: './pip-exmp.component.css'
})
export class PIPEXMPComponent {

  name = "ramakrishna";
  numb = 5000;

  dateObj = new Date();

}
