import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirstDirectiveDirective } from '../../Directives/first-directive.directive';
import { ClickCountDirective } from '../../Directives/click-count.directive';

@Component({
  selector: 'app-custom-directive',
  standalone: true,
  imports: [CommonModule,FirstDirectiveDirective,ClickCountDirective],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.css'
})
export class CustomDirectiveComponent {

}
