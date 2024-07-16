import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, retry } from 'rxjs';
import { Employee } from '../Model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private httpclient:HttpClient) 
  {
   

  }

  url = "http://localhost:3000/employees";

  getAllEmployees():Observable<Employee[]>
  {
    let getEmployeeObsorvble = this.httpclient.get<Employee[]>(this.url).pipe(map((single:Employee[])=>{
        
        let Single = single 
       console.log("HERE WE ARE CONVERTING INTO SINGLE :" + single)
       let  Emp=Single.map((res:Employee)=>{

        console.log("HERE WE ARE CONVERTING INTO RES :" + res)
          return   new Employee(res.ID,res.FirstName,res.LastName,res.Gmail,res.Mobile,res.Salary,res.Gender,res.id)
        })
        return Emp
      })
    );
   return getEmployeeObsorvble;
  }
 

}
