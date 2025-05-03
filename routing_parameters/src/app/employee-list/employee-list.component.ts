import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  deptList=[
      {"id":'1',"deptname":'ECE'},
      {"id":'2',"deptname":'CSE'},
      {"id":'3',"deptname":'EEE'},
      {"id":'4',"deptname":'CIVIL'},
      {"id":'5',"deptname":'MECH'}
      
    ]
    constructor(private _route:Router){}

    onSelect(dep :any){
      this._route.navigate(['/details',dep.deptname])
    }
  }
