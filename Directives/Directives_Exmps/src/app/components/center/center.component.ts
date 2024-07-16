import { Component } from '@angular/core';
import { DirectiviesComponent } from '../directivies/directivies.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ModelComponent } from '../model/model.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import {CustomDirectiveComponent} from '../custom-directive/custom-directive.component'
import { PIPEXMPComponent } from '../pip-exmp/pip-exmp.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [DirectiviesComponent,UserListComponent,ModelComponent,ProductsListComponent,CustomDirectiveComponent , PIPEXMPComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
