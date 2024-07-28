import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parrent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parrent.component.html',
  styleUrl: './parrent.component.css'
})
export class ParrentComponent {

  @ViewChild(ChildComponent)Child:any
  constructor(){

     
  }
  Display()
  {
    
    console.log(this.Child)
  }


}
