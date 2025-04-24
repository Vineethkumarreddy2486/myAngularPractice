import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgFor } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent{
  public Emp_list:any=[]
  constructor(private _empList:EmployeeService) {}
  ngOnInit(){
    this._empList.getemployees().subscribe((data) =>{
      this.Emp_list=data
    })
  }
}

