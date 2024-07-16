import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpclientdemoComponent } from './components/httpclientdemo/httpclientdemo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpclientdemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HttpClient.Demo.2';
}
