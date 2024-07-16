import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
 

export const routes: Routes =
[
    {path:"",component:ProductsComponent},

    // {path:"",component:AdminComponent},

    //  {path:'singleproduct/:id',component:SingleproductComponent} USING PARTH PARRAM


    {path:"login",component:LoginComponent},

    {path:"register",component:RegisterComponent},
 
    {path:"singleproduct",component:SingleproductComponent},

    {
        
        path:"admin",
        
        component:AdminComponent,
        
        children:[

            {path:"login",component:LoginComponent},

            {path:"register",component:RegisterComponent}
        ]
        
    },

];
