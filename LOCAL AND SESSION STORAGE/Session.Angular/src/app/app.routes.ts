import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

    {
    
        path:'', component:LoginComponent
    
     },
 {
    
    path:'Home', component:HomeComponent

 },
 {
    
    path:'Login', component:LoginComponent

 }

];
