import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'] // Fixed typo from 'styleUrl' to 'styleUrls'
})
export class DatabindingComponent {
msg :string="";

 numb = 100;
res = 0;
 count(event: any) {
   
    if(event.target.value)
      {
         this.res = this.numb - this.msg.length;
       }
     
   }

  
}
