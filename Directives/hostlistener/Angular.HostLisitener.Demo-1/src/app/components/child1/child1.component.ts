import { Component } from '@angular/core';
import { LoginDirective } from '../../Directives/login.directive';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [LoginDirective],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

}
