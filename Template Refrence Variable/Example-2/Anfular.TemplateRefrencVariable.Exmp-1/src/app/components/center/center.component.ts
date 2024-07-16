import { Component } from '@angular/core';
import { BindDataComponent } from '../bind-data/bind-data.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [BindDataComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
