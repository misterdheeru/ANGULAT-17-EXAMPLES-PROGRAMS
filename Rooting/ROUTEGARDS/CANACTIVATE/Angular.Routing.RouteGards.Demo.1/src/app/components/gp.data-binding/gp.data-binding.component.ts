import { Component } from '@angular/core';
import { GpNavBarComponent } from '../gp.nav-bar/gp.nav-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gp-data-binding',
  standalone: true,
  imports: [GpNavBarComponent,RouterOutlet],
  templateUrl: './gp.data-binding.component.html',
  styleUrl: './gp.data-binding.component.css'
})
export class GpDataBindingComponent {

}
