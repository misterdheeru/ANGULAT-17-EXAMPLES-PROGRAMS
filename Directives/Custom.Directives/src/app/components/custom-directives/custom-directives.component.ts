import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StyleDirective} from '../../Directives/style.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [CommonModule,StyleDirective,FormsModule],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.css'
})
export class CustomDirectivesComponent {

  public name:string="";
  
 
  
  
   
  
}
