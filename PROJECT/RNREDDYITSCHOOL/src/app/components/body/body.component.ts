import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { CardsComponent } from '../cards/cards.component';
 
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule ,CarouselComponent,CardsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

 
}
