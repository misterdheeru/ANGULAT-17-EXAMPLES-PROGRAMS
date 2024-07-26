import { createReducer, on } from "@ngrx/store"
import { setEmployees } from "../ACTIONS/employees.Action"


export let INITIALDATA = {
    Employees : [
        {ID:1,Name:"Rama",Salary:2500,Age:25},
        {ID:2,Name:"Sitha",Salary:2500,Age:25},
        {ID:3,Name:"Lava",Salary:2500,Age:25},
        {ID:4,Name:"Kusha",Salary:2500,Age:25}
    ]
}
    


export const EmployeeReduser = createReducer(
    INITIALDATA,
    
    on(setEmployees , (state , Data)=>{
        return {
            ...state ,  Employees:Data.emp
        }
        
    })
)