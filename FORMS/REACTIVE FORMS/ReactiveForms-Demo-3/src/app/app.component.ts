import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBulderComponent } from './components/form-bulder/form-bulder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormBulderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
