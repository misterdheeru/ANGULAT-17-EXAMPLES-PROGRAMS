import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure:false
})
export class SortPipe implements PipeTransform {

    transform(value: any): any {

    console.log("sorted Pip is Called")
    return value.sort((a:number,b:number)=>
    {

         return a-b;
     })
    }

//   transform(value: any): any {
    
//    return value.reverse();

//  }
}
