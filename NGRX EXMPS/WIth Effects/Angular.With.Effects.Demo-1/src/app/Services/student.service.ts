import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { STUDENTSMODEL } from '../Models/students.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpclient : HttpClient) { }

  getStudentsList() :Observable<STUDENTSMODEL[]>
  {
   return  this.httpclient.get<STUDENTSMODEL[]>("http://localhost/Exmp-1/api/Students/")
  }
  deleteStudents(Stdid:number)
  {
    return this.httpclient.delete<STUDENTSMODEL>(`http://localhost/Exmp-1/api/Students/${Stdid}`)
  }
  getSingleStudent(Stdid:number)
  {
    return this.httpclient.get<STUDENTSMODEL>(`http://localhost/Exmp-1/api/Students/${Stdid}`)
  }
  addStudent(std:any)
  {
    return this.httpclient.post<STUDENTSMODEL>(`http://localhost/Exmp-1/api/Students/`,std)
  }
}
