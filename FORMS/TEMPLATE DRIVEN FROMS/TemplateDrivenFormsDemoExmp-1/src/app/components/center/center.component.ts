import { Component } from '@angular/core';
import { TemplateDrivenFormExmp1Component } from '../template-driven-form-exmp-1/template-driven-form-exmp-1.component';
import { TemplateDriven2Component } from '../template-driven-2/template-driven-2.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [TemplateDrivenFormExmp1Component,TemplateDriven2Component],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
