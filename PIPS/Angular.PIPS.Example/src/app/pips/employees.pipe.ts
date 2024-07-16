import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employees',
  standalone: true
})
export class EmployeesPipe implements PipeTransform {

  transform(value: any, gender:any): unknown {

 
    if(gender=="Male")
      {
        return "Mr. "+value
      }
      else
      {
        return "Miss. "+value
      }

   
  }

}
