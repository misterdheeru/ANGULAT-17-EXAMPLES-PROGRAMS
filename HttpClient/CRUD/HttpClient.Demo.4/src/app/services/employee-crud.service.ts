import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCRUDService {

  url ="http://localhost/Exmp-1/api/Students/";
 

  constructor(private httpclient : HttpClient)
   { 


   }

   FetchDropDownList()
   {
    const url = "http://localhost/Exmp-1/api/Courses/";
    let Obsorable = this.httpclient.get(url)
    return Obsorable;
   }
   FetFlechDataOfEmployees()
   {

    let Obsorable =  this.httpclient.get(this.url)
    return Obsorable;

   }
   DeleteEmployees(sid:any)
   {
    let Obsorable = this.httpclient.delete(`${this.url}/${sid}`)
    return Obsorable;
   }

   InsertEmployees(empobj:any)
   {
    let Obsorable = this.httpclient.post(this.url,empobj)
    return Obsorable;
   }



}
