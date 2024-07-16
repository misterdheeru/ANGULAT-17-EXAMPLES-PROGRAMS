import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EmpDropDown, EmployeesCrud } from '../ModelCalss/employees-crud';
 

@Injectable({
  providedIn: 'root'
})
export class EmployeeCRUDService {

  url ="http://localhost/Exmp-1/api/Students/";
 

  constructor(private httpclient : HttpClient)
   { 


   }

   FetchDropDownList():Observable<EmpDropDown[]>
   {
    const url = "http://localhost/Exmp-1/api/Courses/";
    
    let  ObsorableGetDropDownListOfCourses = this.httpclient.get<EmpDropDown[]>(url).pipe(
      map((ARRAYLIST:EmpDropDown[])=>{

      console.log("CALL => 2  :   ARRAYLIST DATA")
      console.log(ARRAYLIST)

      let Result = ARRAYLIST.map((SINGLE:EmpDropDown)=>{

        console.log("CALL => 3  :   SINGLE DATA")
        console.log(SINGLE)

       let coursers =  new EmpDropDown(SINGLE.CourseId,SINGLE.CourseName)
       return coursers
      
      })

      console.log("CALL => 4  :   FINAL RESULT DATA")
      console.log(Result)


      return Result
      })

    )
    console.log("CALL => 1  : OBSORABLE")
    console.log(ObsorableGetDropDownListOfCourses)
    return ObsorableGetDropDownListOfCourses
    
    
   }



   FetFlechDataOfEmployees(): Observable<EmployeesCrud[]>
   {
      return this.httpclient.get<EmployeesCrud[]>(this.url).pipe(
       map((res: EmployeesCrud[]) => {
        console.log(res)
         return res.map((item: EmployeesCrud) => {
          console.log(item)
           return new EmployeesCrud(item.StdId,item.StdName, item.CourseId,item.CourseName);
         });
       })
     );    
   }
   DeleteEmployees(sid:any)
   {
    let Obsorable = this.httpclient.delete(`${this.url}/${sid}`)
    return Obsorable;
   }

   InsertEmployees(empobj:any):Observable<EmployeesCrud>
   {
    let Obsorable = this.httpclient.post<EmployeesCrud>(this.url,empobj).pipe(
      map((single:EmployeesCrud)=>{
        return new EmployeesCrud(single.StdId, single.StdName, single.CourseId, single.CourseName)
      })
    )
    return Obsorable;
   }

   UpdateEmployees(stdID:any,stdObj:any):Observable<EmployeesCrud>
   {
    let Obsorable = this.httpclient.put<EmployeesCrud>(`${this.url} `+ stdID , stdObj).pipe(
      map((single:EmployeesCrud)=>{
      
        return new EmployeesCrud(single.StdId, single.StdName, single.CourseId, single.CourseName)
      })
    )
    return Obsorable;
   }

   getSingleEmploeee(stdID:any):Observable<EmployeesCrud>
   {

    let getEmployeeSingleObbsorible = this.httpclient.get<EmployeesCrud>(`${this.url} ${stdID}`).pipe(
      map((single:EmployeesCrud)=>{
        return new  EmployeesCrud(single.StdId, single.StdName, single.CourseId, single.CourseName) 
      })
    )

    return getEmployeeSingleObbsorible
 

   }
   


}
