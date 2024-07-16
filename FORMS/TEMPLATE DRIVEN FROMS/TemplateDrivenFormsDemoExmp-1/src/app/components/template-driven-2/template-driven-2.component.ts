import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-2.component.html',
  styleUrl: './template-driven-2.component.css'
})
export class TemplateDriven2Component {

  print(myForm:any)
  {
    console.log(myForm)
  }
}
