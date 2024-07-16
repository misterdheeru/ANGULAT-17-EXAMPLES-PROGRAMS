import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs:['child1Data','Mobile','NewName','location']
})
export class Child2Component {

  child1Data :any
  NewName:any
  Mobile:any;
  location:any;
}
