import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardsAnimationDirective } from '../../Directives/cards-animation.directive';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink,CardsAnimationDirective],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

}
