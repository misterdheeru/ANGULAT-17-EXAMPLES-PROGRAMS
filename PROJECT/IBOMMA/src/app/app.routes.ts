import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AboutComponent } from './components/about/about.component';
import { BugComponent } from './components/bug/bug.component';

export const routes: Routes = [

    {path:"", component:DataBindingComponent},
    {path:"about" ,component:AboutComponent},
    {path:"bug" ,component:BugComponent},
    {path:"about/bug" ,component:BugComponent},
];
