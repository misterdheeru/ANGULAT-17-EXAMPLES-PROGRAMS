export class Employee {
 
 
  public ID :number
  public FirstName : string
  public LastName :string
  public Gmail :string
  public Mobile :number
  public Salary :number
  public Gender :string
  public id :string

  constructor(ID:number,firstname:string,lastname:string,gmail:string,mobile:number,salary:number,gender:string,id:string)
  {
   this.ID =ID
   this.FirstName =firstname
   this.LastName =lastname
   this.Gmail=gmail
   this.Mobile=mobile
   this.Salary=salary
   this.Gender=gender
   this.id=id
  }

  getFullName() {
     if(this.Gender=="Male")
      {
        return `Mr.${this.FirstName} ${this.LastName} `
      }
      if(this.Gender=="Female"){
      return `Miss.${this.FirstName} ${this.LastName} `
      }
      return ""

  }
  getTotalSalary()
   {
     let sal = this.Salary*12
    
      return sal
   }
 
}
