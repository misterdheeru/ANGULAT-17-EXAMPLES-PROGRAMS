import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
