import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-http-client-demo',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './http-client-demo.component.html',
  styleUrls: ['./http-client-demo.component.css']
})
export class HttpClientDemoComponent implements OnInit {

  constructor(private httpclient: HttpClient)
  {

  }

  ngOnInit(): void {
      this.FetchAngular()
  }

  users:any=[];

FetchAngular()
{
  const url ="http://localhost/Exmp-1/api/Students/"
  let Obsorable = this.httpclient.get(url);
  Obsorable.subscribe(response=>{
  this.users = response
  })
}

}
