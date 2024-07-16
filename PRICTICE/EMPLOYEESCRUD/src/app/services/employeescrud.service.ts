import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {employeecrud } from '../Models/employeecrud';
import { Observable, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeescrudService {

  constructor(private httpclient :HttpClient)
   { 


   }

   url1 = "http://localhost/EMPLOYEECRUD/api/Employees"

   url2="http://localhost/EMPLOYEECRUD/api/Position"

   getEmployees() : Observable<employeecrud []>
   {
     let OBSORABLE = this.httpclient.get<employeecrud[]>(this.url1).pipe(

      map((singleemployee : employeecrud[])=>{

        let single = singleemployee.map((res:employeecrud)=>{

          const empobj =  new employeecrud(res.empId,res.FirtstName,res.LastName,res.Age,res.Mobile,res.Email,res.HigherDate,res.DOB ,res.Gender,res.Salary,res.PId , res.PName)
        
         

          return empobj

       
        })
   
        return single

      })
     )
   
     return OBSORABLE

   }



   getPositions()
   {
    let OBSORABLE = this.httpclient.get(this.url2)
     return OBSORABLE
   }
   postremployees(emp:any)
   {
    let OBSORABLE = this.httpclient.post(this.url1,emp);
    return OBSORABLE
   }
   
   DeleteEmployee(id:any)
   {
    let OBSORABLE = this.httpclient.delete(this.url1+"/"+id);
    return OBSORABLE
   }

   EditEmployees(id:any)
   {
    let OBSORABLE = this.httpclient.get(this.url1 +"/"+id);
    
    return OBSORABLE

   }
   saveemp(emp:any)
   {
    let OBSORABLE = this.httpclient.put(this.url1,emp)
    return OBSORABLE
   }




}
