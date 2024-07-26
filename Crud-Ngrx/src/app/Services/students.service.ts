import { Injectable } from '@angular/core';
import { STUDENTS } from '../Models/Student.Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpclient: HttpClient) {}

  getStudents() {
    return this.httpclient.get<STUDENTS[]>(
      'http://localhost/Exmp-1/api/Students'
    );
  }
  addStudent(data: any) {
    return this.httpclient.post<STUDENTS[]>(
      'http://localhost/Exmp-1/api/Students',
      data
    );
  }
  dletestudent(ID: any) {
    return this.httpclient.delete(`http://localhost/Exmp-1/api/Students/${ID}`);
  }
  getSingleStudent(ID: any) {
    return this.httpclient.get(`http://localhost/Exmp-1/api/Students/${ID}`);
  }

  savesingl(ID: any, DATA: STUDENTS) {
    return this.httpclient.put(
      `http://localhost/Exmp-1/api/Students/${ID}`,
      DATA
    );
  }
}

 
