import { Routes } from '@angular/router';
import { GpHomeComponent } from './components/gp.home/gp.home.component';
import { GpAboutComponent } from './components/gp.about/gp.about.component';
import { GpCartComponent } from './components/gp.cart/gp.cart.component';
import { GpContactComponent } from './components/gp.contact/gp.contact.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

    {path:"",component:GpHomeComponent},
    {path:"home",component:GpHomeComponent},
    {path:"about",component:GpAboutComponent},
    {path:"carts",component:GpCartComponent , canActivate:[authGuard]},
    {path:"contact",component:GpContactComponent}
];
