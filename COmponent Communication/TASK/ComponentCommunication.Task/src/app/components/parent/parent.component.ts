import { Component } from '@angular/core';
import { Child1Component } from '../child-1/child-1.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child1Component,FormsModule,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',

})
export class ParentComponent {

  Employees = [
  
    {
    ID:123,
    Name:"RAMA",
    Mobile:9000626875,
    Salary:2500,
   },
   {
    "ID": 124,
    "Name": "SITA",
    "Mobile": 9000626888,
    "Salary": 2600,
  },
  {
    "ID": 125,
    "Name": "LAXMAN",
    "Mobile": 9000626899,
    "Salary": 2700,
  },
  {
    "ID": 126,
    "Name": "BHARAT",
    "Mobile": 9000626900,
    "Salary": 2800,
  }
  
  ]
  
  recivedDataFromParrent(DATA:any)
  {
   
    this.Employees.push({
      ID :DATA.ID,
      Name :DATA.NAME,
      Mobile :DATA.MOBIEL,
      Salary :DATA.SALARY
    })

  }

 
   
  Delete(ID:number)
  {

    console.log(ID);

  this.Employees =  this.Employees.filter((DATA:any)=>{
    
    if(DATA.ID!==ID)
      {
        console.log(DATA.ID);
        
        return DATA
      }

   })

  }


}
