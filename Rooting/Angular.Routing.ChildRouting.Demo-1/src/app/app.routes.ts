import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import path from 'path';
import { DotnetComponent } from './components/dotnet/dotnet.component';
import { JavaComponent } from './components/java/java.component';
import { PythonComponent } from './components/python/python.component';
import { DatascienceComponent } from './components/datascience/datascience.component';
import { DotnetsyllabusComponent } from './components/dotnetsyllabus/dotnetsyllabus.component';

export const routes: Routes = [
    
    {path:"home",component:HomeComponent,
      children: [
        {path:"dotnet",component:DotnetComponent,
          children:[
            {path:"dotnetsyllabus",component:DotnetsyllabusComponent}
          ]
        },
        {path:"java",component:JavaComponent},
        {path:"python",component:PythonComponent},
        {path:"datascience",component:DatascienceComponent}
      ]
    },
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
];
