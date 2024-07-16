import { createAction, props } from "@ngrx/store";
import { Employee } from "../../../Modal/Employees";

export const getEmployees = createAction("get-employees")
export const setEmployees = createAction("set-employees",props<{ employees: Employee[] }>());
 
export const addEmployee = createAction("add-employee", props<{ employees: Employee }>());
export const deleteEmployee = createAction("delete-employee", props<{empid: number | Employee }>());