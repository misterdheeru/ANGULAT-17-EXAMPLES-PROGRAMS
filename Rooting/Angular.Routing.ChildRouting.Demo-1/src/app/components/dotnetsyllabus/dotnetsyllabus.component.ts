import { Component } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dotnetsyllabus',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './dotnetsyllabus.component.html',
  styleUrl: './dotnetsyllabus.component.css'
})
export class DotnetsyllabusComponent {

  constructor(private router :Router)
  {

  }
  gp_btn_Back()
  {
  
    this.router.navigate(['/home/dotnet'])

  }
}
