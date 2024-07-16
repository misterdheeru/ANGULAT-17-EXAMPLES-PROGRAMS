import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Uppercasevalidation } from '../../Utile/uppercasevalidation';

@Component({
  selector: 'app-form-bulder',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-bulder.component.html',
  styleUrl: './form-bulder.component.css'
})
export class FormBulderComponent implements OnInit {

  constructor(private fb : FormBuilder)
  {

  }

myForm : any

ngOnInit(): void {

  this.myForm = this.fb.group({
   Name : new FormControl("",[Validators.required,Uppercasevalidation.uppercaseName]),
   Experience  : new FormControl("",[Validators.required]),
   employees:this.fb.array([])
  })  


 
}

 
employee():FormArray
{
  return this.myForm.get('employees') as FormArray
}
creatreAndAddSkills()
{
 return this.fb.group({
    skill: new FormControl("",[Validators.required]),
    experience : new FormControl()
  })
}
AddSkill()
{
  this.employee().push(this.creatreAndAddSkills())
}
getskill() 
{
  return this.myForm.get('skill') as FormArray
}
getExp() 
{
  return this.myForm.get('experience') as FormArray
}

submit(myForm:any){
  console.log(myForm)
}
}
 

