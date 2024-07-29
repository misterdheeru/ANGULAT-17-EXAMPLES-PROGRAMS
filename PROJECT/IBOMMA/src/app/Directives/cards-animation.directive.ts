import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardsAnimation]',
  standalone: true
})
export class CardsAnimationDirective  implements AfterViewInit{
  private buttonClickListener:  any

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    
      this.buttonClickListener = this.renderer.listen("window", 'load', () => this.onButtonClick());
 
  }

  onButtonClick() {

    const element = this.el.nativeElement;
    
    const textp2 = element.getElementsByClassName('cards');
    for (let i = 0; i < textp2.length; i++) {
     
        this.renderer.addClass(textp2[i], 'animate__animated');
        this.renderer.addClass(textp2[i], 'animate__flipInY');
     
    }

    console.log('Scroll clicked');
  }

  ngOnDestroy() {
 
  }
}
