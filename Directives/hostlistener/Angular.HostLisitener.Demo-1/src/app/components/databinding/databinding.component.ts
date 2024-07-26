import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [Child1Component, HeaderComponent, FooterComponent],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

}
