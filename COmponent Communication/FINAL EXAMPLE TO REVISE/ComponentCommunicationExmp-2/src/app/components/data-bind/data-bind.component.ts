import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-data-bind',
  standalone: true,
  imports: [Child1Component,Child2Component],
  templateUrl: './data-bind.component.html',
  styleUrl: './data-bind.component.css'

})
export class DataBindComponent  {

 

  Name = "RNREDDY IT SCHOOL";

  GmailId:any;
  Mobile :any;
  Loc:any;
  recivedData(DATA:any)
  {
    this.GmailId = DATA.G;
    this.Mobile = DATA.M;
    this.Loc = DATA.L;
  }

}
