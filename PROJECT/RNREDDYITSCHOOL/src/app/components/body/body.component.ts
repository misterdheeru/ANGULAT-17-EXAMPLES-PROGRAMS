import { Component } from '@angular/core';
import * as course from './courses.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { CarouselComponent } from '../carousel/carousel.component';
 
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule ,CarouselComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

mycourses = (course as any).default;

iconshare = faShare;

}
