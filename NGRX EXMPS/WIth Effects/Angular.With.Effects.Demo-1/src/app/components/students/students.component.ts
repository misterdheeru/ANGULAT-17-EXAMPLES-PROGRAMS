import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { addStudent, deleteStudent, getStudents, singleStudent } from '../../STATE-MANAGMENT/ACTIONS/students.Actions';
import { STUDENTSMODEL } from '../../Models/students.Model';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  
  @ViewChild("ID")id:any
  @ViewChild("NAME")name:any
  @ViewChild("COURSE")course:any

  StudentsList : STUDENTSMODEL [] = []
   

  constructor(private store : Store<any> )
  {

  }

  ngOnInit(): void {
      
    this.store.dispatch(getStudents())
    this.store.select("Students").subscribe({
      next:(res=>{
        this.StudentsList = res.students
        console.log(res)
      })
    })
  }

  AddStudent()
  {
     
    const DATA = {StdId:this.id.nativeElement.value , StdName:this.name.nativeElement.value , CourseId :this.course.nativeElement.value ,CourseName:""}
  
    this.store.dispatch(addStudent({STUDENT:DATA}))
    this.id.nativeElement.value=""
        this.name.nativeElement.value=""
            this.course.nativeElement.value=""
  }


  DeleteStd(stdNo:any)
  {
   this.store.dispatch(deleteStudent({STUDENTID:stdNo}))
  }

  Update(Stdid:any)
  {
    this.store.dispatch(singleStudent({STUDENTID:Stdid}))
  }
}
