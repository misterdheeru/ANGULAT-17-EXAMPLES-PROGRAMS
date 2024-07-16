import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Console, error } from 'node:console';

@Component({
  selector: 'app-directivies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directivies.component.html',
  styleUrl: './directivies.component.css'
})
export class DirectiviesComponent {
   num1: number = 24;
   num2: number = 10;
   res: number = 55;
   x: number = 3;
  flag:boolean=false;
  result :any;

  DATAFINAL: any ;
  

 
  

  Show()
  {
    this.result =   fetch("http://localhost/Exmp-1/api/Students")
    this.result.then(
      (response:any)=>{
        let JsonPromiss = response.json()
          JsonPromiss.then(
            (FinalData:any)=>{

          
             this.DATAFINAL = FinalData;

            },
            (error:any)=>(console.log(error))
          )
      },
      (error:any)=>{console.log(error)}
    )

    
  }
  

  

DATADISPLAY = this.Show()
   
 


  checkIfEqual(value1: any, value2: any) {
      return value1 > value2;
   }


  cars =["TOYOTA","Mahindra","Tata","Ferrari","Kia","Mahindra"]
  carvalues =[0,1,2,3,4,5]

  employes = [
    {ID :1 ,Name:"Rama",Mobnumber:9849159803,Location:"Hydrabad"},
    {ID :2 ,Name:"Varun",Mobnumber:90006268746,Location:"Warangal"},
    {ID :3 ,Name:"Tarun",Mobnumber:8520810424,Location:"Vijaywada"},
    {ID :4 ,Name:"Kiran",Mobnumber:8074179981,Location:"Kammam"},
    {ID :5 ,Name:"Sunil",Mobnumber:6542145874,Location:"Nalogonda"},
 
 ];


 Add()
 {
  this.employes =[
    {ID :1 ,Name:"Rama",Mobnumber:9849159803,Location:"Hydrabad" },
    {ID :2 ,Name:"Varun",Mobnumber:90006268746,Location:"Warangal"},
    {ID :3 ,Name:"Tarun",Mobnumber:8520810424,Location:"Vijaywada"},
    {ID :4 ,Name:"Kiran",Mobnumber:8074179981,Location:"Kammam"},
    {ID :5 ,Name:"Sunil",Mobnumber:6542145874,Location:"Nalogonda"},
   
    {ID :6 ,Name:"Venkat",Mobnumber:5411254879,Location:"Vishakapatnam"},
    {ID :7 ,Name:"Bheem",Mobnumber:954477955213,Location:"Bheemavaram"},
    {ID :8 ,Name:"Sam",Mobnumber:6548898965452,Location:"Rayalaseema"},
    {ID :9 ,Name:"Rithik",Mobnumber:65422548,Location:"Vishakapatnam"},
    {ID :10 ,Name:"Akhil",Mobnumber:65414788,Location:"Hydrabad"}
  ]
 }
  

 employeesTrackBy(employes:any)
{
  return employes.ID;
}
EmpTrackBye(emp:any)
{
  return emp.StdId
}

 e = true;



 


}
