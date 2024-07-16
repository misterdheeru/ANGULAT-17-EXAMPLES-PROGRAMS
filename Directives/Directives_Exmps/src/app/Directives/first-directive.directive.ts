import { Directive ,ElementRef, HostListener} from '@angular/core';
import { setInterval } from 'timers';
import { setTimeout } from 'timers/promises';

@Directive({
  selector: '[appFirstDirective]',
  standalone: true
})
export class FirstDirectiveDirective {
  constructor(private el: ElementRef) {
    
 
      this.el.nativeElement.style.color = 'blue'
      this.el.nativeElement.style.textAlign = 'center'
  
    
       
  }
  

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'black'
  }
  @HostListener('mouseleave') onMouseleave() {
    this.el.nativeElement.style.color = 'blue'
  }


}
