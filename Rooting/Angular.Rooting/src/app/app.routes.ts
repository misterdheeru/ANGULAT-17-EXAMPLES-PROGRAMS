import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';



export const routes: Routes = [

    {
        'path':'',component:HomeComponent
    },
    {
        'path':'about',component:AboutusComponent
    },
    {
        'path':'Contact',  component:ContactComponent
    },
    {
        'path':'Home',component:HomeComponent
    }
];
