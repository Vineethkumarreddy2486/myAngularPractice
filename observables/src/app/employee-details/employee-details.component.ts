import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  imports: [NgFor],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {

  public Emp_details:any =[]

  constructor(private _empdetails:EmployeeService){}
  ngOnInit(){
    this._empdetails.getemployees().subscribe((data) =>{
      this.Emp_details=data
    })
  }
}
