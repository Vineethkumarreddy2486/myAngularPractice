import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _url: string = 'data1.json';

  constructor(private http: HttpClient) { }

  // here http is just a local variable
  // get method takes url as an argument ,here we are not taking any url from server so we can create a 
  // new file (data.json) and using that url


  getemployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url)           // get will return observable
      .pipe(                                              // Handling Errors
        catchError(this.errorHandling)         // catchError method will take function as argument   
      );     
  }
  private errorHandling(error : HttpErrorResponse){
    return throwError(() => new Error('Path Error'))
  }
  

}
