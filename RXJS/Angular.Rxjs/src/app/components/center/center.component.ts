import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { Observable, from } from 'rxjs';
import { ObservablesComponent } from '../observables/observables.component';
import { Observables2Component } from '../observables2/observables2.component';
import { Observable3Component } from '../observable3/observable3.component';
import { Observable4Component } from '../observable4/observable4.component';
import { SubjectsComponent } from '../subjects/subjects.component';
import { SearchLoginFinalComponent } from '../search-login-final/search-login-final.component';
import { Message1Component } from '../message-1/message-1.component';
import { Message2Component } from '../message-2/message-2.component';
import { Message3Component } from '../message-3/message-3.component';
 
@Component({
  selector: 'app-center',
  standalone: true,
  imports: [CommonModule,FormsModule,ObservablesComponent,Observables2Component ,Observable3Component,Observable4Component,SubjectsComponent,SearchLoginFinalComponent,Message1Component,Message2Component,Message3Component],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {
 
 
}
