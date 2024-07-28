import { Routes } from '@angular/router';
 
import { AboutComponent } from './components/about/about.component';
import { BugComponent } from './components/bug/bug.component';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';

export const routes: Routes = [

   {path:"",component:BodyComponent},
   {path:"about",component:AboutComponent},
   {path:"bug",component:BugComponent},
   
];
