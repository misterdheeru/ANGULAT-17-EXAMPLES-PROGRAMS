import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientDemoComponent } from './components/http-client-demo/http-client-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   
}
