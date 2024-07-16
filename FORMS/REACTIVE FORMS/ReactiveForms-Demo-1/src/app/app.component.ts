import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsDemo1Component } from './components/reactive-forms-demo-1/reactive-forms-demo-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsDemo1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReactiveForms-Demo-1';
}
