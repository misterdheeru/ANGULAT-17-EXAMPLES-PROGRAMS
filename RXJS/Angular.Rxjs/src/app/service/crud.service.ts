import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpclient :HttpClient)
  {
  
  
  }
  
  
  

  getemployee( )
  {
   
   let OBSORABLE =  this.httpclient.get(`http://localhost/EMPLOYEECRUD/api/Employees`);
  
  return OBSORABLE
  }
}
