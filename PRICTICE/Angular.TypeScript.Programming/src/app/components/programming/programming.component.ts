import { Component } from '@angular/core';
import * as moviesData from './MoviesData.json';
import { CommonModule } from '@angular/common';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'app-programming',
  standalone: true,
  imports: [CommonModule,ModelComponent],
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent {
  constructor() {
     // 
    // this.Search();
    // this.Update()
  }

  MovieName = "RAMA"; // Search
  DeleteNumber = 1; // Delete

  MoviesList = (moviesData as any).default;

  FinalRes: any = [];

  Search() {
    this.MoviesList = this.MoviesList.filter((move: any) => {
      return move.Name == this.MovieName;
    });
  }

  Delete(value:number) {
    this.MoviesList = this.MoviesList.filter((FullArrayData: any) => {
      if(FullArrayData.ID!=value)
        {
        return  this.FinalRes = FullArrayData
        }
      
    });
    
  }

  update = 3; // ID to update
  uname: string = "RAMA"; // New name

  Update() {

    this.MoviesList.forEach((DATA: any) => {
      if (DATA.ID == this.update) {
        DATA.Name = this.uname; 
      }
    });
    console.log(this.MoviesList);
  }
}
