import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';

export const routes: Routes = [
    
    {path:"",component:ProductsComponent},

    {path:"singleproduct/:id",component:SingleproductComponent}
];
