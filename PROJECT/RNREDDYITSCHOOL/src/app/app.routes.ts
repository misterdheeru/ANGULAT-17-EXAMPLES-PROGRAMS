import { Routes } from '@angular/router';
import { CenterComponent } from './components/center/center.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
    {path:"",component:CenterComponent},
    {path:"home",component:HomeComponent},
];
