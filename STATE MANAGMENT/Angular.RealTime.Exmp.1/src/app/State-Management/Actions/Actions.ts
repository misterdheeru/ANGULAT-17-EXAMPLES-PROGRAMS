import { createAction, props } from "@ngrx/store";

 export let empupdatename = createAction('emp-name',props<{Name:string}>())
 export let empid = createAction("emp-id",props<{Id:string}>())
 export let empsalary = createAction("emp-salary",props<{Salary:string}>())
 