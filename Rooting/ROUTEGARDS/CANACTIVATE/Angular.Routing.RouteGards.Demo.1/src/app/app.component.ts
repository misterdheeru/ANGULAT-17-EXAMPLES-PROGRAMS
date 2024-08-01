import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GpDataBindingComponent } from './components/gp.data-binding/gp.data-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GpDataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular.Routing.RouteGards.Demo.1';
}
