import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

value :string = "password";
  checkedBox(event:any)
  {

    if(event.target.checked==true)
     {
      this.value = "text";
     }
     else{

      this.value = "password";
     }

  }
}
