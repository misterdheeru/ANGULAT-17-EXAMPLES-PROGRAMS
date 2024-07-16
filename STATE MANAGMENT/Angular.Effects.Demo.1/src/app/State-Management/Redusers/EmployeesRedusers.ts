import { createReducer, on } from '@ngrx/store';
import { addEmployee, deleteEmployee, setEmployees } from '../Actions/EmployeeAction';
import { Employee } from '../../../Modal/Employees';

export interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: []
};

export const employeeReducer = createReducer(
  initialState,
  on(setEmployees, (state, { employees }) => ({
    ...state,
    employees
  })),
  on(addEmployee, (state, { employees }) => ({
    ...state,
    employees: [...state.employees, employees]
  })),
  on(deleteEmployee, (state, { empid }) => ({
    ...state,
    employees: state.employees.filter(emp => emp.StdId !== empid)
  }))
);
