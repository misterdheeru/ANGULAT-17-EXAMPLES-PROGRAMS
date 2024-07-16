import { CurrencyPipe } from "@angular/common";

 export class employeecrud {
 
public empId :Number;
public FirtstName : String; 
public  LastName : String ;
public Age :Number;
public Mobile : Number;
public Email : String;
public HigherDate :Date;
public DOB :Date;
public Gender :String;
public Salary :Number;
public PId : Number;
public PName :String




  constructor(empId:Number , FirtstName:String , LastName :String , Age :Number , Mobile : Number , Email :String , HigherDate : Date ,DOB :Date , Gender :String , Salary :Number , PId :Number ,PName:String)
  {
     
    this.empId = empId,
    this.FirtstName = FirtstName,
    this.LastName = LastName ,
    this.Age =Age,
    this.Mobile = Mobile ,
    this.Email = Email,
    this.HigherDate = HigherDate,
    this.DOB = DOB,
    this.Gender = Gender,
    this.Salary = Salary,
    this.PId = PId,
    this.PName = PName
  }

  FullName()
  {
    return this.FirtstName + " " + this.LastName
  }
 

}
