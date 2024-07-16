import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompip',
  standalone: true
})
export class Custom1Pipe implements PipeTransform {

  transform(moviesListData: any,searchText:string): any {
    
     return moviesListData.filter((ele:any)=>{
      console.log(JSON.stringify(ele).includes(searchText))
      return JSON.stringify(ele).includes(searchText);
     })   
 
  }

}
