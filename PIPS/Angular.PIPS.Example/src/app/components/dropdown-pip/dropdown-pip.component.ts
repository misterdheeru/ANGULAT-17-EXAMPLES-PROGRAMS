import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import *as Directors from './Directors.json';
import *as RajamouliList  from './Rajamouli.json';
import *as DilRajuList  from './DilRaju.json';
import { DropdowncustomPipe } from '../../pips/dropdowncustom.pipe';


@Component({
  selector: 'app-dropdown-pip',
  standalone: true,
  imports: [CommonModule,FormsModule,DropdowncustomPipe],
  templateUrl: './dropdown-pip.component.html',
  styleUrl: './dropdown-pip.component.css'
})
export class DropdownPipComponent {

  DirectorsListArray = (Directors as any).default
  
  selectValue = 0;
  Data = 0;

  RajamouliMoviesList = (RajamouliList as any).default

  DilRajuMovieList = (DilRajuList as any).default;
  
}
