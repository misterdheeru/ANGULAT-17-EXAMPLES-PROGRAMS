import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private Employees = [
    {
      ID: 1,
      Name: "Rama",
      Gender: "Male"
    },
    {
      ID: 2,
      Name: "Sita",
      Gender: "Female"
    },
    {
      ID: 3,
      Name: "Lakshmana",
      Gender: "Male"
    },
    {
      ID: 4,
      Name: "Hanuman",
      Gender: "Male"
    },
    {
      ID: 5,
      Name: "Sugriva",
      Gender: "Male"
    },
    {
      ID: 6,
      Name: "Bharata",
      Gender: "Male"
    },
    {
      ID: 7,
      Name: "Shatrughna",
      Gender: "Male"
    },
    {
      ID: 8,
      Name: "Vibhishana",
      Gender: "Male"
    },
    {
      ID: 9,
      Name: "Tara",
      Gender: "Female"
    },
    {
      ID: 10,
      Name: "Mandodari",
      Gender: "Female"
    }
  ];

  constructor() { }


  getMissOrMr()
  {
    return this.Employees.map((emp:any)=>{
      if(emp.Gender=="Male")
        {
         return {ID:emp.ID , Name: "Mr " +emp.Name , Gender :emp.Gender}
        }

        if(emp.Gender=="Female")
          {
            return {ID:emp.ID , Name: "Miss " +emp.Name , Gender :emp.Gender}
          }

          return emp
    })
  }

  getEmployees() {
    return this.Employees;
  }

  getMaleEmployees()
  {
    return this.Employees.filter((emp:any)=>{
      if(emp.Gender=="Male")
        {
          
          let employs = emp;
          
          return employs
        }
    }).map((emps:any)=>{
      if(emps.Gender=="Male")
        {
          return {ID:emps.ID , Name: "Mr " +emps.Name , Gender :emps.Gender}
        }
        return emps
    })
  }


  getFemaleEmployee()
  {
    return this.Employees.filter((emp:any)=>{
      if(emp.Gender=="Female")
        {
          let employs = emp;
          return employs
        }
    }).map((emp:any)=>{
    
      if(emp.Gender=="Female")
        {
          return {ID:emp.ID , Name : "Miss "+ emp.Name , Gender : emp.Gender}
        }
        else
        return emp
    })
  }

}
