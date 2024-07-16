import { Component } from '@angular/core';
import { CustomDirectivesComponent } from '../custom-directives/custom-directives.component';


@Component({
  selector: 'app-center',
  standalone: true,
  imports: [CustomDirectivesComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
