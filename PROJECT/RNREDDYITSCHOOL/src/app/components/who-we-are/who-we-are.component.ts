import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css'] 
})
export class WhoWeAreComponent {

  Experience: number; 
  intervalId: any; 

  constructor() {
    this.Experience = 0;

    this.intervalId = setInterval(() => {
      this.Experience++;
      if (this.Experience === 29) {
        clearInterval(this.intervalId); 
      }
      console.log(this.Experience); 
    },100);
  }
}
