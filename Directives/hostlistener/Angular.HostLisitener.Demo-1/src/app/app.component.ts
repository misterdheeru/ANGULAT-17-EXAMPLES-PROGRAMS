import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 
import { Child1Component } from './components/child1/child1.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,Child1Component,HeaderComponent,FooterComponent,BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular.HostLisitener.Demo-1';
}
