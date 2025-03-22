import {  NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  public employeeList:any=[];

  constructor(private _employee:EmployeeService) {}

  ngOnInit(){
    this.employeeList = this._employee.getEmployees();
  }
}
