import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-httpclientdemo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './httpclientdemo.component.html',
  styleUrl: './httpclientdemo.component.css'
})
export class HttpclientdemoComponent implements OnInit {

  users :any
  constructor(private httpclient : HttpClient)
  {

  }
  ngOnInit(): void {
    this.DisplayUsersData()
}

DisplayUsersData ()
{
 
  const users = "http://localhost/Exmp-1/api/Students/";
  let obsorbel =  this.httpclient.get(users)
  obsorbel.subscribe(response=>{
    this.users = response
  })





}
}
