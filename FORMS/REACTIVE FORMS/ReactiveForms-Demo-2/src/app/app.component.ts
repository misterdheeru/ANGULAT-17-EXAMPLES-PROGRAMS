import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveDemo1Component } from './components/reactive-demo-1/reactive-demo-1.component';
import { ReactForm2Component } from './components/react-form-2/react-form-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveDemo1Component,ReactForm2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReactiveForms-Demo-2';
}
