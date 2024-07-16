import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs:['NameChild'],
  outputs:['eventemiter']
})
export class Child1Component {

  NameChild:any;

  GmailID = "chinthala.dheeru@gmail.com"
  MobileNumber = 9949184937;
  Location = "Hydrabad";
  eventemiter = new EventEmitter()

  senddatatoparrentcomponent()
  {
    this.eventemiter.emit({G :this.GmailID  , M : this.MobileNumber , L :this.Location})
  }

}
