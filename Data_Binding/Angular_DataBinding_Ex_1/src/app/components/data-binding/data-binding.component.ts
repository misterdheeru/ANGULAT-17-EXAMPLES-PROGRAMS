import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  value:string = "password";

  checkedvalue(event :any)
  {
     if(event.target.checked)
      {
        this.value = "text";
      }
      else
      {
        this.value="password"
      }
  }

}
