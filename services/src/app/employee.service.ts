import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"firstName":"Vineeth","lastName":"Challa","gender":"male"},
      {"firstName":"Vivin","lastName":"Reddy","gender":"male"},
      {"firstName":"Tejo","lastName":"Reddy","gender":"male'"}
    ]
  }
}
