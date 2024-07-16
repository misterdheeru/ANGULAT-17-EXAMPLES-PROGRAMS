import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,BodyComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
