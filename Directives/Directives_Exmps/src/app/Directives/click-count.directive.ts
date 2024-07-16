import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appClickCount]',
  standalone: true
})
export class ClickCountDirective {

  count: number = 0;
  num: number = 0;

  constructor(private el:ElementRef)
  {
    this.el.nativeElement.style.color="red";
  }


  @HostListener('click') onClick() {
    this.count++;
    this.num = this.count;
  
  }
}
