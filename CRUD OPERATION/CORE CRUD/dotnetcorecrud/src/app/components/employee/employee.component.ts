import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EmpcrudService } from '../../services/empcrud.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

export interface PeriodicElement {
    id: number,
    firstName: string,
    lastName: string,
    mobile: number,
    email: string,
    salary: number,
    gender: string,
    higherDate: Date,
    dob: Date,
    pid: number,
    pname: string
}

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatTableModule,MatPaginatorModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit , AfterViewInit {
  constructor(private service: EmpcrudService) {}

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'mobile','email','salary','gender','higherDate' ,'dob','pid','pname'];
   
  data: any = []

  datasource  :any

  @ViewChild(MatPaginator) paginator :MatPaginator | undefined
  
  ngAfterViewInit(): void {
 
      this.datasource.paginator = this.paginator
  }
  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.service.getEmployees().subscribe((res:any) => {
      return this.datasource = new MatTableDataSource<PeriodicElement>(res);
      
    });
  }

  
  
}
