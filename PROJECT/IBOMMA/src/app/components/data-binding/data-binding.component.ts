import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [NavbarComponent,BodyComponent,FooterComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

}
