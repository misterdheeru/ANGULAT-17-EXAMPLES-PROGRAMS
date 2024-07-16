import { Directive,ElementRef,HostListener } from '@angular/core';
import { CustomDirectivesComponent } from '../components/custom-directives/custom-directives.component';
@Directive({
  selector: '[appStyle]',
  standalone: true
})
export class StyleDirective {

  
  Data = new CustomDirectivesComponent();
 
  constructor(private el:ElementRef) 
  { 

    // this.el.nativeElement.style.color = "red";
    // this.el.nativeElement.style.backgroundColor = "yellow";
    // this.el.nativeElement.style.textAlign = "center";
    // this.el.nativeElement.style.padding = "10px";

    console.log(this.el.nativeElement)

  


  }

   @HostListener('keyup')F1()
   {
     if(this.el.nativeElement.value.length < 8)
    {
      this.el.nativeElement.style.backgroundColor="red"
      this.el.nativeElement.style.color="White";
      

      
    }
    else{
      this.el.nativeElement.style.backgroundColor="green"
      this.el.nativeElement.style.color="White"
    }
   }
   @HostListener('click')F2()
   {
     
      this.el.nativeElement.style.backgroundColor="pink"
      this.el.nativeElement.style.color="White";
      let First =  this.el.nativeElement.value.charAt(0)
      this.el.nativeElement.value = First.toUpperCase()
      console.log( this.el.nativeElement.value)
   }

}
