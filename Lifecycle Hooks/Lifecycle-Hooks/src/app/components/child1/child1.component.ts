import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs:['child1','arr'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnChanges{

  child1 :any  
  arr:any

  arr2=[10,20,30]

  constructor(private changeDetectorRef:ChangeDetectorRef)
  {

  }

  refresh()
  {
    this.changeDetectorRef.detectChanges
  }

  ngOnChanges(Data:SimpleChanges): void {

    
 
     console.log("Child Component Calling")
     console.log(Data)
      
  }
}
