import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo-1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo-1.component.html',
  styleUrls: ['./reactive-demo-1.component.css']
})
export class ReactiveDemo1Component {
    number :any []=[]
  myform = new FormGroup({


   mobilenumber :new FormControl(),

   mobile: new FormArray([
         
      new FormControl()


    ])
  });

  add() {
    let myforms = this.myform.get('mobile') as FormArray;
    myforms.push(new FormControl());
  }

  remove(i: number) {
    let myforms = this.myform.get('mobile') as FormArray;
    myforms.removeAt(i);
  }

  submit(myform: any) {
    console.log(myform)
    let mob= myform.value['mobile']

   
    mob.map((numb:any) => {
      
      this.number = numb

       

 

      console.log(this.number)
    })

  }
}
