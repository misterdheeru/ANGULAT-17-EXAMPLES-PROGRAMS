import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpcrudComponent } from './components/empcrud/empcrud.component';
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmpcrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
