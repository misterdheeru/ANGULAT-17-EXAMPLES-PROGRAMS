import { createAction, props } from "@ngrx/store";
import { STUDENTS } from "../../Models/Student.Model";


export const getStudents = createAction('[GET STUDENTS]');
export const setStudentsListFormate = createAction('[SET STUDENTS]',props<{Students:STUDENTS[]}>())
export const DELETESTUDENT = createAction("[DELETE STUDENT]",props<{STUDENTID:number }>())