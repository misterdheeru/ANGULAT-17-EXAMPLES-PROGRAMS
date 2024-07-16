import { Component, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs:['achild1'],
  outputs:['NameOfAnEvent']
})
export class Child1Component {

  achild1 :any
  piracy1 = "TamilMV";
  piracy2 = "TamilRockers";

  MovieName = "RRR";

  NameOfAnEvent =  new  EventEmitter();

  MoviesList ={ID:123,Name:"RRR",ReleaseDate:2022}
  Datatransfer()
  {
  
    this.NameOfAnEvent.emit(this.MoviesList)

  }
 
}
