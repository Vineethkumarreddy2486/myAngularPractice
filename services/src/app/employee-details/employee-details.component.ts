import { Component } from '@angular/core';
import { publicDecrypt } from 'crypto';
import { EmployeeService } from '../employee.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  imports: [NgFor],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {
  public employeeDetails:any=[]

  constructor(private _employeeDetails:EmployeeService){
    this.employeeDetails=this._employeeDetails.getEmployees()
  }
}
