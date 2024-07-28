import { Routes } from '@angular/router';
import { SingleitemComponent } from './components/singleitem/singleitem.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [

    {path:'',component:ProductsComponent},
    {path:'singleitem/:id',component:SingleitemComponent}
];
