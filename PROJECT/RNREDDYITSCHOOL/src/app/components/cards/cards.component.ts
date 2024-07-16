import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { CarouselComponent } from '../carousel/carousel.component';
import * as course from './courses.json';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  mycourses = (course as any).default;

  iconshare = faShare;
}
