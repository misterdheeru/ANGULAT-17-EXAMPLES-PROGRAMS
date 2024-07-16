import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-login-final',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './search-login-final.component.html',
  styleUrl: './search-login-final.component.css'
})
export class SearchLoginFinalComponent implements AfterViewInit {

constructor(private httpclient :HttpClient){

}

  @ViewChild('searchinput')search:any

ngAfterViewInit(): void {
  fromEvent(this.search.nativeElement, 'keyup').pipe(
    switchMap((data: any) => {
      return this.httpclient.get(`http://localhost/EMPLOYEECRUD/api/Employees/Search/${data.target.value}`)
    })
  ).subscribe(res => console.log(res));
  
}



}
