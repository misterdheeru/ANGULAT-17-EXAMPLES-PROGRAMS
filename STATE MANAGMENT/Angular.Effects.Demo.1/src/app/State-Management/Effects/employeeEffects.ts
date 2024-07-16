import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, concatMap, switchMap } from 'rxjs/operators';
import { EmployeesCrudeService } from '../../Services/employees-crude.service';
import { addEmployee, deleteEmployee, getEmployees, setEmployees } from '../Actions/EmployeeAction';
import { Employee } from '../../../Modal/Employees';
@Injectable()
export class employeesEffect {
  constructor(
    private actions: Actions,
    private empservice: EmployeesCrudeService
  ) {}

  FetchEmployees = createEffect(() =>
    this.actions.pipe(
       
      ofType(getEmployees),
      mergeMap(() =>
      
        this.empservice.getData()
          .pipe(map((res) => setEmployees({ employees: res })))
      )
    )
  );

  addEmployee$ = createEffect(() =>
    this.actions.pipe(
      ofType(addEmployee),
      mergeMap((action) =>
        this.empservice.addEmployee(action.employees).pipe(
          
          map(() => getEmployees())
          //Dispach Refresh call
        
        )
      )
    )
  );
  

  deleteemployee = createEffect(()=>
  this.actions.pipe(
    ofType(deleteEmployee),
    mergeMap((action)=>this.empservice.deleteemp(action.empid).pipe(
      map(() => setEmployees({ employees: [] })),
      map(()=>getEmployees())
 
    ))

  ))
}
