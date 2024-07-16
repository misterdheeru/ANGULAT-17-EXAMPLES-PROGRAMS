import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form-2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './react-form-2.component.html',
  styleUrls: ['./react-form-2.component.css']
})
export class ReactForm2Component implements OnInit {

   myForm = FormGroup
  ngOnInit(): void {
      
  }
}
