import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateName } from '../../State-Management/Action/Actions';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @ViewChild('Name')Name:any
  constructor(private store :Store<any>)
  {

  }

  addStoreName()
  {
    this.store.dispatch(updateName(this.Name.nativeElement.value))
  }

}
