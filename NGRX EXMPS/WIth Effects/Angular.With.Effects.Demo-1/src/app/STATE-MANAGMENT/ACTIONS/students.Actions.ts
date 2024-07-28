import { createAction, props } from "@ngrx/store";
import { STUDENTSMODEL } from "../../Models/students.Model";
import { students } from "../REDUCERS/students.Reducer";

/* 
 *createAcrion it is going to take an type as a string And payload 
 *props it is an generic type it is going to take as payload   
*/
export const getStudents = createAction("[GET STUDENTS]");
export const  setStudents = createAction("[SET STUDENTS]" ,props<{STUDENTS:STUDENTSMODEL[]}>());
export const deleteStudent = createAction("[DELETE STUDENT]",props<{STUDENTID:number}>())
export const addStudent = createAction("ADD STUDENT",props<{STUDENT:STUDENTSMODEL }>())
export const singleStudent = createAction("[SINGLE-STUDENT]" ,props<{STUDENTID:number}>())