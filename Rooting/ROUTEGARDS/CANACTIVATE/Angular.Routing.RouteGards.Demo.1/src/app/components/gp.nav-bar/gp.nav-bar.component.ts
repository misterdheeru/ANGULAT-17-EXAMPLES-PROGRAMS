import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gp-nav-bar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './gp.nav-bar.component.html',
  styleUrl: './gp.nav-bar.component.css'
})
export class GpNavBarComponent{

  
}
