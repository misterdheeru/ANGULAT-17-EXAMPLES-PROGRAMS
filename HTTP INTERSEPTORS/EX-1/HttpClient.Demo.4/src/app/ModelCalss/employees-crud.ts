export class EmployeesCrud {

 public StdId:number
 public StdName:string
 public CourseId:number
 public CourseName:string


 constructor(stdId:number,stdName:string,CourseId:number,CourseName:string)
 {
    this.StdId =stdId
    this.StdName=stdName
    this.CourseId=CourseId
    this.CourseName = CourseName

    
 }
 



}
export class EmpDropDown
{
   public CourseId:number
   public CourseName:string

   
 constructor(CourseId:number,CourseName:string)
 {

    this.CourseId=CourseId
    this.CourseName = CourseName

    
 }
 
  
}

