import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubjectsprojService } from '../../service/subjectsproj.service';

@Component({
  selector: 'app-message-1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './message-1.component.html',
  styleUrl: './message-1.component.css'
})
export class Message1Component implements OnInit {

  
  subres :any [] = []

  constructor(private service : SubjectsprojService)
  {

  }

  ngOnInit(): void {
      this.getsubject()
  }
  

  getsubject()
  {
  let message = this.service.getMessage().subscribe( message=>{
    if(message)
      {
        this.subres.push(message)
      }
      else{
        this.subres = []
      }
  }
    
  )
  

  }

}
