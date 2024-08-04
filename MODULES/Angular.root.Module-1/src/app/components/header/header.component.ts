import { Component } from '@angular/core';
import { CrudproductsService } from '../../services/crudproducts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private service : CrudproductsService)
  {

  }
}
