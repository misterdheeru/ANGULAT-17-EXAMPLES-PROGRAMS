import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudeService {

  constructor(private httpclient : HttpClient)
  { 


  }

  getEmployees()
  {
    const url = "http://localhost/Exmp-1/api/Students/";
    
   let observable =  this.httpclient.get(url)

   return observable

  }

 
  selectCourse()
  {
    const url = "http://localhost/Exmp-1/api/Courses/";
    let observable = this.httpclient.get(url)
    return observable
  }

  postEmployees(objemp:any)
  {
    const url = "http://localhost/Exmp-1/api/Students/";
    
   let observable =  this.httpclient.post(url,objemp)
   
   return observable
  }

  deleteEmployees(empID:any)
  {
    const url = "http://localhost/Exmp-1/api/Students/"; 

    let  observable = this.httpclient.delete(`${url}/${empID}`)

    return observable
  }

  updateEmployee(empID:any,empObj:any)
  {
    const url = "http://localhost/Exmp-1/api/Students/"; 

    let observable = this.httpclient.put(url,empObj)

    return observable
  }


}
