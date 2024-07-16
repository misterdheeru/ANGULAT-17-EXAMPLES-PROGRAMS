import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModelInterfaceComponent } from './components/model-interface/model-interface.component';
import { users } from './ModelClass/modelclassdemo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ModelInterfaceComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 
 
}
