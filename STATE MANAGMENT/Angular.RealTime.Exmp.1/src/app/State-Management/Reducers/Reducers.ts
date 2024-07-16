import { createReducer, on } from '@ngrx/store';
import { empid, empsalary, empupdatename } from '../Actions/Actions';
import { state } from '@angular/animations';

interface employees {
  id: String;
  Name: String;
  Salary: String;
}

let initialstate: employees = {
  id: '',
  Name: '',
  Salary: '',
};

export let EmployeeReducer = createReducer(
  initialstate,

  on(empupdatename, (state, data) => ({ ...state, Name: data.Name })),
  on(empid, (state, data) => ({ ...state, id: data.Id })),
  on(empsalary, (state, data) => ({ ...state, Salary: data.Salary }))
);
