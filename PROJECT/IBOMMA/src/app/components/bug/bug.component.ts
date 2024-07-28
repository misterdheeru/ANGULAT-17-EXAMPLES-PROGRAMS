import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-bug',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './bug.component.html',
  styleUrl: './bug.component.css'
})
export class BugComponent {

}
