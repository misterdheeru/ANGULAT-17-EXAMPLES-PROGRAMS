import { createReducer, on } from '@ngrx/store';
import { STUDENTSMODEL } from '../../Models/students.Model';
import { addStudent, deleteStudent, setStudents, singleStudent } from '../ACTIONS/students.Actions';

/*
* Here this interface contains Array of students : STUDENTSMODEL  as List Formate 
* Why because the data is comming as list formate this data is going to (store) in store
*/

export interface students {
  students: STUDENTSMODEL[];
}
/*
* Here we are declearing the interface members 
*/
export const INTIALSTATE: students = {
  students: [
    
  ],
};
/*
* Here we are creating reduser  it is an call back function it is going to take input as INTIALSTATE  
* on :  This function is used within createReducer to define how the state should be updated 

* this on function is going to take input as action  , INTIALSTATE and modified DATA 

* retun {

*...state   / when we write like this means we are getting previous state here 

*  std:DATA.STUDENTS  //  ekada manam modify iyna data ni
   
* privious state data loki add chysuthunamu 

  }

* std:DATA.STUDENTS   : Data kuda direct gaa add ithale as a key ga std ni tesukoni 
  
*  std anee oka array lo add chysuthunamu as a new array gaa 
  
* apudu e std array key students array lo oka key laga store ithadhi.

*/

export const STUDENTSREDUSER = createReducer(
  INTIALSTATE,
  on(setStudents, (state, DATA) => {
    return {
      ...state,
      students: DATA.STUDENTS,
    };
  }),
  on(deleteStudent,(state,Data)=>{
    return {
      ...state ,
       std :Data.STUDENTID
    }
  }),

  /**
   * ...state, : Here Privious State is Comming 
   * students:[DATA.STUDENT] : Here Data is comming from Db as a {key:value} fomate and storing into Students array
   *Ekada em ithudhi antee Data as a response ga vasuthudhi  oka object formate lo male a data student array lo store ithuidhi 
   */
  on(addStudent,(state,DATA)=>{
    return {
         ...state,
           students:[DATA.STUDENT]
    }
  }),
  on(singleStudent,(state,DATA)=>{
    return{
      ...state , 
       studentsSingle:[DATA.STUDENTID]
    }
  }),
  
);
