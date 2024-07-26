import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { StudentsService } from "../../Services/students.service";
import { DELETESTUDENT, getStudents, setStudentsListFormate } from "../ACTIONS/students.Action";
import { map, mergeMap } from "rxjs";
import { STUDENTS } from "../../Models/Student.Model";

@Injectable()

export class StudentEffects
{
    constructor(private actions:Actions ,private service :StudentsService)
    {

    }

    FetchStudents = createEffect(
     ()=>    this.actions.pipe(
        ofType(getStudents),
        mergeMap(()=>this.service.getStudents().pipe(
            map((res)=>setStudentsListFormate({Students:res}))
        )
            
        )
    )
 
    )


    
    DeleteStudent = createEffect(()=>
        this.actions.pipe(
            ofType(DELETESTUDENT),
            mergeMap((actions)=>this.service.dletestudent(actions.STUDENTID).pipe(
                map(()=>DELETESTUDENT({STUDENTID:actions.STUDENTID})),
                map(()=>getStudents())
              
            ))
        ))
} 