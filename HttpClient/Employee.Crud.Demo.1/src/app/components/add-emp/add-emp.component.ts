import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeCrudeService } from '../../services/employee-crude.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-emp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
  outputs:['eventemit']
})
export class AddEmpComponent implements OnInit {

  id: any;
  name: any;
  item: any;
  users: any;
  hidvalue: boolean = true;
  courses: any;

 

  constructor(private empservices: EmployeeCrudeService) {}

  ngOnInit(): void {
    this.selectcourse();
  }

  DisplayEmployeeData() {
    this.empservices.getEmployees().subscribe({
      next: (response) => {
        this.users = response;
          
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
 

  selectcourse() {
    this.empservices.selectCourse().subscribe({
      next: (response) => {
        this.courses = response;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  eventemit = new EventEmitter()

  SendData(id:any,name:any,item:any) {
      
   this.eventemit.emit({
    StdId: id.value,
    StdName: name.value,
    CourseId: item.value
  })
     
    }

     
  }

