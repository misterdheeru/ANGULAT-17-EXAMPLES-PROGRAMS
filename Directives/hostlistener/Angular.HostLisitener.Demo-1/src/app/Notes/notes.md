
# ELEMENTREF

**ElementRef** : ElementRef is a class in Angular that provides a direct reference to a 
DOM element.

**Example** :  if you want to change the color of a paragraph in your component, you can
use ElementRef to grab that paragraph and apply the color change.

**TELUGU FORMATE** : ElementRef use chysukoni manam Dom Ni motham select chysukoni styles 
or logicks apply chysukovachu 


### HOW TO USE 

```typescript
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<button>Click me</button>'
})
export class ExampleComponent implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Get the full DOM element
    console.log(this.el.nativeElement);

    // Select a particular element of the DOM and change its style
    this.el.nativeElement.querySelector('button').style.color = "white";
  }
}
```
# HOSTBINDING

**HostBinding** : The @HostBinding decorator is used to bind a property of the host element.

**TELUGU FORMATE** : E Host Binding Decorator use chysukoni manam css style  ni oka properties 
ga set chysukovachu.

### HOW TO USE



 