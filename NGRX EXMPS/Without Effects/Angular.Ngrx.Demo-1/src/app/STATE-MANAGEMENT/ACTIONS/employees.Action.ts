import { createAction, props } from "@ngrx/store";
import { EMPLOYEES } from "../../MODELS/employees.Model";


export const setEmployees = createAction("[SET EMPLOYEES]",props<{emp : EMPLOYEES []}>())

