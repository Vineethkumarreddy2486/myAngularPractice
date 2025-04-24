import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _url: string = 'data.json';

  constructor(private http: HttpClient) { }

  // here http is just a local variable
  // get method takes url as an argument ,here we are not taking any url from server so we can create a 
  // new file (data.json) and using that url


  getemployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url);
    // get will return observable 
  }
}
