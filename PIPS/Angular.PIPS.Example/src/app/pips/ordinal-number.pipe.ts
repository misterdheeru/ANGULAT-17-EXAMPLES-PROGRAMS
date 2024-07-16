import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalNumber',
  standalone: true
})
export class OrdinalNumberPipe implements PipeTransform {

  transform(value: any): unknown {

    
    let str = value;
    let One = str.endsWith("1");
    let Two = str.endsWith("2");
    let Three = str.endsWith("3");
    let Four = str.endsWith("4");
    let Fifth = str.endsWith("5");
    let Six = str.endsWith("6");
    let Seveen = str.endsWith("7");
    let Eight = str.endsWith("8");
    let Nine = str.endsWith("9");
    let Ten = str.endsWith("0");

    var one=  value+"st";
    var two=  value+"nd";
    var three=  value+"rd";
    var Final=  value+"th";

    if(One==true)
      {
         return one
      }
    if(Two==true)
        {
           return two
        }
    if(Three==true)
        {
           return three
        }
       if(Four==true)
        {
          return Final
        }
        if(Fifth==true)
          {
            return Final
          }
          if(Six==true)
            {
              return Final
            }
            if(Seveen==true)
              {
                return Final
              }
              if(Eight==true)
                {
                  return Final
                }
                if(Nine==true)
                  {
                    return Final
                  }
                  if(Ten==true)
                    {
                      return Final
                    }
    return "";
  }

}
