import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpcrudService {

  constructor(private httpclient :HttpClient) { }

  getEmployees()
  {
    return this.httpclient.get('http://localhost/CRUDEMPLOYEE/api/Employees')
  }

  deleteEmployee(numb:any)
  {
    return this.httpclient.delete(`http://localhost/CRUDEMPLOYEE/api/Employees/Delete/${numb}`);

  }
}
