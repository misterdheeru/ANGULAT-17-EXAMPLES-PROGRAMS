import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 
import { Child1Component } from './components/child1/child1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,Child1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular.HostLisitener.Demo-1';
}
