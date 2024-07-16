import { Component, DoCheck, OnInit, ChangeDetectorRef } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parrent',
  standalone: true,
  imports: [Child1Component, CommonModule, FormsModule],
  templateUrl: './parrent.component.html',
  styleUrls: ['./parrent.component.css']
})
export class ParrentComponent implements DoCheck, OnInit {
  Name: any;
  arr = [10, 20, 30, 40];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
  
  }
    
  ngDoCheck(): void {
    // console.log("ndDoCheck is Calling");
  }
}

