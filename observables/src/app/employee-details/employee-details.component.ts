import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  imports: [NgFor],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent implements OnInit{
  public emp_details:any[]=[]
  public _detErrorMsg=''
  constructor(private _empDetails :EmployeeService){}

  ngOnInit(): void {
    this._empDetails.getemployees().subscribe({
      next :(data)=>{
        this.emp_details=data
      },
      error:(errorD)=>{
        this._detErrorMsg=errorD.message
        console.error('Details error',errorD)
      }
    })
  }
}
