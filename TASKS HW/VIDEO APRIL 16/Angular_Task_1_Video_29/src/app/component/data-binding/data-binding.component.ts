import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
 

  Data:boolean = false;
  f1()
  { if(this.Data==false)
    {
      this.Data=true
    }
    else{
      this.Data=false
    }
     
    
  }


}
