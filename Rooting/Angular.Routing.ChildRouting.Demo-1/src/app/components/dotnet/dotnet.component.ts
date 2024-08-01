import { Component } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dotnet',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './dotnet.component.html',
  styleUrl: './dotnet.component.css'
})
export class DotnetComponent {

  phide :boolean = false
constructor(private route :Router)
{

}
gp_btb_Click(){

  this.phide=true
  this.route.navigate(['/home/dotnet/dotnetsyllabus']);

}
}
