import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../Modal/Employees';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesCrudeService {

  private apiUrl = 'http://localhost/Exmp-1/api/Students';

  constructor(private httpclient: HttpClient) {}

  getData(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpclient.post<Employee>(this.apiUrl, employee)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteemp(num: number | Employee): Observable<any> {
    const id = typeof num === 'number' ? num : num.StdId;
    return this.httpclient.delete(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError('Something bad happened; please try again later.');
  }
}
