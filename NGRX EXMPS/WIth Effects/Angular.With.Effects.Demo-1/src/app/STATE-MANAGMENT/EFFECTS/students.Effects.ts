import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addStudent, deleteStudent, getStudents, setStudents, singleStudent } from "../ACTIONS/students.Actions";
import { map, mergeMap } from "rxjs";
import { StudentService } from "../../Services/student.service";

 

/**
 * When We Use Injectable() Decerator That time we are going to be creates ower Ts file  as a service file 
 */
@Injectable()

export class STUDENTSEFFECT 
{
  /** 
   * Here We are performing DI process 
   * private actions : Actions Ekada manam Actions Anitini techukutunamu 
   * And We are Adding Servces File also 
   */
    constructor(private actions :Actions , private service :StudentService){}
    /**
     * createEffect() it is an higherOrder Function 
     * eka edhi em chysuthudhi antee ani actions ni tesukoni 
     * ofType(getStudents)manam dispach Chysina Action type Match ithudha ani check chysuthudhi
     * okavela Match iteee mergeMap() lo service ni call chysuthunamu 
     * male a vachina observable ni map chynii a vachina data ni Set chysi Reduser Ki send chysuthunamu 
     */
    FetchStudentsList = createEffect(()=> this.actions.pipe(
        ofType(getStudents),
        mergeMap(()=>this.service.getStudentsList().pipe(
            map((res)=>setStudents({STUDENTS:res}))
        ))
    ) )
    DeleteStudents = createEffect(()=>this.actions.pipe(
        ofType(deleteStudent),
        mergeMap((action)=>this.service.deleteStudents(action.STUDENTID).pipe(
            map(()=>deleteStudent({STUDENTID:action.STUDENTID})),
            map(()=>getStudents())
        ))
    ))
    AddStudents = createEffect(()=>this.actions.pipe(
        ofType(addStudent),
        mergeMap((actions)=>this.service.addStudent(actions.STUDENT).pipe(
            map(()=>addStudent({STUDENT:actions.STUDENT})),
            map(()=>getStudents())
        ))
    ))
 
    
    
    UpdateStudents = createEffect(()=>this.actions.pipe(
        ofType(singleStudent),
        mergeMap((action)=>this.service.getSingleStudent(action.STUDENTID).pipe(
            map(()=>singleStudent({STUDENTID:action.STUDENTID})
        ))
    )))
    
    


}