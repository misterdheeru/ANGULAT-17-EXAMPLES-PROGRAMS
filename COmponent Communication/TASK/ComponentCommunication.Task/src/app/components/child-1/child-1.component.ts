import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.css',
  outputs:['eventemit']
})
export class Child1Component {


  ID:any
  name:any
  mobile:any
  salary:any

  eventemit = new EventEmitter()

  EmployeesData:any ;

  sendDataToParrent()
  {
    this.eventemit.emit({ID : this.ID , NAME : this.name , MOBIEL : this.mobile , SALARY : this.salary})
  }

}
