import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child1Component,Child2Component,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  a =  null;

  b = "RNREDDY IT SCHOOL";

  ID:any;
  NAME:any;
  YEAR:any;

  recivedData(Data:any)
  {
    this.ID = Data.ID;
    this.NAME = Data.Name;
    this.YEAR = Data.ReleaseDate;
  }
}
