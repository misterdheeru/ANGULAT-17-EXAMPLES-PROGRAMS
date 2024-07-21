import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { CardsComponent } from '../cards/cards.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { FooterComponent } from '../footer/footer.component';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
 
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule ,CarouselComponent,CardsComponent,NavbarComponent,AboutMeComponent,FooterComponent,WhoWeAreComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

 
}
