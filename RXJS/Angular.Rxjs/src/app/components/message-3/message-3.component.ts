import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SubjectsprojService } from '../../service/subjectsproj.service';

@Component({
  selector: 'app-message-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-3.component.html',
  styleUrl: './message-3.component.css'
})
export class Message3Component implements OnInit {
  subres :any = []


constructor(private servie : SubjectsprojService)
{

}

ngOnInit(): void {
    
  this.Display()

}

Display()
{
  let message = this.servie.getMessage().subscribe(data=>{
 
        this.subres = data
      
  })
}


}
