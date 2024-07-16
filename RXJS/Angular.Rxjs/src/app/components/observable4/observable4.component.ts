import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { exhaustMap } from 'rxjs';
import { CrudService } from '../../service/crud.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 import {fromEvent}from'rxjs';
 
@Component({
  selector: 'app-observable4',
  standalone: true,
  imports: [CommonModule ,FormsModule,ReactiveFormsModule],
  templateUrl: './observable4.component.html',
  styleUrl: './observable4.component.css'
})
export class Observable4Component  implements AfterViewInit {

  @ViewChild('saveButton') btnclicks: any

  constructor(private httpclient :HttpClient)
  {

  }
  ngAfterViewInit(): void {
     this.exhaustMapDemo()
  }


  exhaustMapDemo() {
    const clicks = fromEvent(this.btnclicks.nativeElement, 'click');
    const result = clicks.pipe(
      exhaustMap(() => this.httpclient.get('http://localhost/EMPLOYEECRUD/api/Employees'))
    );
    result.subscribe((x) => console.log(x));
  }
}
