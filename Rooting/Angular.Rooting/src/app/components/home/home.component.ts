import { Component, OnDestroy } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy{

  constructor(private routing : Router)
  {

  }
  ngOnDestroy(): void {
     console.log("Home Component Destory") 
  }

  About()
  {
   this.routing.navigate(['/about'])
  }
}
