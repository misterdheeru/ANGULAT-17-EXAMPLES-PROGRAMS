import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { CarouselComponent } from '../carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { CardsAnimationDirective } from '../../Directives/cards-animation.directive';
import { courses } from '../../MODELS/cards.Model';
import { Store } from '@ngrx/store';
import * as AOS from 'aos';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,CardsAnimationDirective],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {

  

  myCourses :courses[] =[]

  iconshare = faShare;

  constructor(private store : Store<any>)
  {

  }

  ngOnInit(): void {
       
    AOS.init()
    window.addEventListener('load',AOS.refresh)
    this.store.select("COURSES").subscribe(res=>{
      this.myCourses = res.courses
    })


  }

 

}