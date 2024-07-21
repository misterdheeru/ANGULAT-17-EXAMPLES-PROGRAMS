import { Directive, ElementRef, Renderer2, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appLogin]',
  standalone: true
})
export class LoginDirective implements AfterViewInit, OnDestroy {

  private buttonClickListener:  any

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const button = this.el.nativeElement.querySelector('button');
    if (button) {
      this.buttonClickListener = this.renderer.listen("window", 'scroll', () => this.onButtonClick());
    }
  }

  onButtonClick() {
    const element = this.el.nativeElement;
    const button = element.querySelector('button');
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.padding = "5px";
    button.style.borderRadius = "0px"; // Corrected property name to 'borderRadius'

    const textp2 = element.getElementsByClassName('two');
    for (let i = 0; i < textp2.length; i++) {
      this.renderer.addClass(textp2[i], 'animated');
  
    }

    console.log('Button clicked');
  }

  ngOnDestroy() {
 
  }
}
