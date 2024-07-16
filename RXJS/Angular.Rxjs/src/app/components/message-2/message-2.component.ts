import { Component, ViewChild } from '@angular/core';
import { SubjectsprojService } from '../../service/subjectsproj.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './message-2.component.html',
  styleUrl: './message-2.component.css'
})
export class Message2Component {
@ViewChild('textbox')textBox:any
constructor(private service : SubjectsprojService )
{

}

send()
{
  this.service.sendMessage(this.textBox.nativeElement.value);
}

clear()
{
  this.service.deleteMessage()
}


}
