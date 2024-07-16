import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsprojService {

  constructor() 
  { 




  }

  publisher = new Subject<any>()
  sendMessage(message:any)
  {
   this.publisher.next({text:message})
  }
  deleteMessage()
  {
   this.publisher.next(null)
  }
  getMessage():Observable<any>
  {
   let Observable = this.publisher.asObservable()
   

   return Observable
  }




}
