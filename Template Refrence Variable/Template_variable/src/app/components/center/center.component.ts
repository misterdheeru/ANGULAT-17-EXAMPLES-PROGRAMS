import { Component } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { Console } from 'node:console';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [DataBindingComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

  styleAdd(element:any)
  {
    element.style.backgroundColor="red";
    element.style.color="white";
    element.style.textalign ="center";
    element.style.padding="30px"
  }
  

} 