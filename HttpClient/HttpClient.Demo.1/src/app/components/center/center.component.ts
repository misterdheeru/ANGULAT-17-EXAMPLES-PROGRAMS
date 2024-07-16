import { Component } from '@angular/core';
import { HttpClientDemoComponent } from '../http-client-demo/http-client-demo.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [HttpClientDemoComponent],
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {

}
