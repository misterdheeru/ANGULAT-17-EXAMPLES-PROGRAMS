import { createReducer, on } from "@ngrx/store";
import { STUDENTS } from "../../Models/Student.Model";
import { DELETESTUDENT, setStudentsListFormate } from "../ACTIONS/students.Action";
 


export interface students
{
    STUDENTS:STUDENTS [];
}
export let INITIALVALUE :students =
{
    STUDENTS : []
}

export const studentsRedusers = createReducer(
    INITIALVALUE,
    on(setStudentsListFormate, (state, DATA) => {
  
      return { ...state, STUDENTS: DATA.Students };
    }),
   on(DELETESTUDENT , (state,DATA)=>{

    return {
        ...state , Students :DATA.STUDENTID
        
    }
   })
)