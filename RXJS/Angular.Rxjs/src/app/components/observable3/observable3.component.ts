import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, exhaustMap, fromEvent, map, pluck, switchMap } from 'rxjs';
import { CrudService } from '../../service/crud.service';
 

interface Employees {
  empId: number;
  FirstName: string;
  LastName: string;
  Age: number;
  Mobile: number;
  Email: string;
  HigherDate: Date;
  DOB: Date;
  Gender: string;
  Salary: number;
  PId: number;
  PName: string;
}




@Component({
  selector: 'app-observable3',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './observable3.component.html',
  styleUrls: ['./observable3.component.css']
})
export class Observable3Component implements OnInit {

 






  constructor(private service: CrudService) {

  }
 

  ngOnInit() {
  
 this.exuistmap()
    
  }

  exuistmap()
  {
    const clicks = fromEvent(document,'click')
    const result = clicks.pipe(
      exhaustMap(()=>this.service.getemployee())
    )

    result.subscribe((x)=>console.log(x))
  }
 
 
}
