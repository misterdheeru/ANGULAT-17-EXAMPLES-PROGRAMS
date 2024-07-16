import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { observeOn } from 'rxjs';

@Component({
  selector: 'app-http-client-demo',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './http-client-demo.component.html',
  styleUrl: './http-client-demo.component.css'
})
export class HttpClientDemoComponent implements OnInit{
users:any

constructor(private httpclient : HttpClient)
{

}

ngOnInit(): void {
    this.Students()
}

Students()
{
  const url = "http://localhost/Exmp-1/api/Students/";
 let Obsurable = this.httpclient.get(url)
 Obsurable.subscribe(response=>{
  this.users = response
 })

}


}
