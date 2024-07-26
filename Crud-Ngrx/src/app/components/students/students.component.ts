import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DELETESTUDENT, getStudents } from '../../STATE-MANAGEMENT/ACTIONS/students.Action';
import { STUDENTS } from '../../Models/Student.Model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent  implements OnInit {
constructor(private store :Store<any>)
{

}
StudentsList :STUDENTS []= []
ngOnInit(): void {
    this.store.dispatch(getStudents())
    this.store.select("STUDENTS").subscribe(res=>{
      
      console.log(res)
      this.StudentsList = res.STUDENTS
    })
  
 
}

deletestudent(stdid:any)
{
  this.store.dispatch(DELETESTUDENT({STUDENTID:stdid}))
}



}
