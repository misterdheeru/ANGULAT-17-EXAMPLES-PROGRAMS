import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent  implements OnInit{

sebject1()
{
  let publisher = new Subject()  // IT WILL GIVE YOU ONLY UPCOMING VALUES
 
  publisher.next("AAAAAAAAAAAAAA")  // PAST DATA
  publisher.next("BBBBBBBBBBBBBB") // PAST DATA
  publisher.subscribe(res=>console.log(res))
  publisher.next("cccccccccccccc")// LATEST DATA 
}

Behavioursubject()
{
  let publisher = new  BehaviorSubject('Hello')
 
  let  sub1 = publisher.subscribe(res=>console.log("Sub-1",res))
  publisher.next("AAAAAA")
  let  sub2 = publisher.subscribe(res=>console.log("Sub-2",res))
  publisher.next("BBBBBBB")
  publisher.next("ccccccc")
  let  sub3 = publisher.subscribe(res=>console.log("Sub-3",res))

 

 
}

ReplaySubject()
{
  let publisher = new  ReplaySubject( )
 
  let  sub1 = publisher.subscribe(res=>console.log("Sub-1",res))
  publisher.next("AAAAAA")
  let  sub2 = publisher.subscribe(res=>console.log("Sub-2",res))
  publisher.next("BBBBBBB")
  publisher.next("ccccccc")
  let  sub3 = publisher.subscribe(res=>console.log("Sub-3",res))
  publisher.next("DDDDDDD")
 

 
}



  ngOnInit(): void {
      // this.sebject1()
      // this.Behavioursubject()
    this.ReplaySubject()
    }
  

}
