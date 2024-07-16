import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [ ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  Name ="";

  CheckedDropDown(event:any)
  {
    this.Name = event.target.value;

    if(this.Name =="-select-")
      {
        this.Name ="plz select ";
      }
  }

}
