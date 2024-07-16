import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected to styleUrls
})
export class HomeComponent implements OnInit {
  users: { username: string; password: string } | null = null;

  ngOnInit(): void {
    const Data = sessionStorage.getItem('users');
 
  
  }
}
