import { Component } from '@angular/core';
import {Router  } from '@angular/router';
 
 
 

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [ ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  constructor(private  data :  Router)
  {

  }
gotohome()
{
  console.log("Your Logic Here")
 this.data.navigate(['/home'])
}
}
