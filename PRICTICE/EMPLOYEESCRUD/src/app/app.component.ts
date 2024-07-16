import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CenterComponent } from './components/center/center.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CenterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMPLOYEESCRUD';
}
