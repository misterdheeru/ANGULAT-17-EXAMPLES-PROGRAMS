import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'templatedriven-exmp-1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form-exmp-1.component.html',
  styleUrl: './template-driven-form-exmp-1.component.css'
})
export class TemplateDrivenFormExmp1Component {
 

  loginform(myForm:any)
  {
    
   console.log(myForm)
  }
}
