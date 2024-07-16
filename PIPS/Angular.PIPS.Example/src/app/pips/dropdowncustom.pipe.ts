import { Pipe, PipeTransform } from '@angular/core';
import *as RajamouliList  from './Rajamouli.json';
import *as DilRajuList  from './DilRaju.json';
import *as DirectorList  from './Directors.json';
@Pipe({
  name: 'dropdowncustom',
  standalone: true
})
export class DropdowncustomPipe implements PipeTransform {


public  RajamouliListMovies = (RajamouliList as any).default;

public  DilRajuListMovies = (DilRajuList as any).default;

public  DirectorListMovies = (DirectorList as any).default;

  transform(value: any ,selectValue :any): any {
    console.log(selectValue)
     if(selectValue==1)
      {
         return this.RajamouliListMovies;
      }
      if(selectValue==2)
        {
          return this.DilRajuListMovies;
        }
    
      return this.DirectorListMovies;
  }

}
