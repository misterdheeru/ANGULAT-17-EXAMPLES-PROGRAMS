import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Custom1Pipe } from '../../pips/custom-1.pipe';
import { FormsModule } from '@angular/forms';
import * as MoviesList from './movies.json';

@Component({
  selector: 'app-custom-pip',
  standalone: true,
  imports: [CommonModule,Custom1Pipe,FormsModule],
  templateUrl: './custom.pip.component.html',
  styleUrl: './custom.pip.component.css'
})
export class CustomPipComponent {

  
  moviesListData =(MoviesList as any).default

  searchText ="";
   


}
