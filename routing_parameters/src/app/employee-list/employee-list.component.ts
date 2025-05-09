import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  public selectedId:number=0;
  deptList=[
      {"id":'1',"deptname":'ECE'},
      {"id":'2',"deptname":'CSE'},
      {"id":'3',"deptname":'EEE'},
      {"id":'4',"deptname":'CIVIL'},
      {"id":'5',"deptname":'MECH'}
      
    ]
    constructor(private _route:Router,private _active :ActivatedRoute){}
//passing the value of parameter to the route
    onSelect(dep :any){
      // this._route.navigate(['/emplist',dep.id])                  // absolote path
      this._route.navigate([dep.id],{relativeTo:this._active})      // relative path
      // Current route: /emplist,Navigation: [dep.id],Result: /emplist/:id
    }
// retrieving the value of the route parameter(optional parameter)
    ngOnInit():void{
      this._active.paramMap.subscribe(params=>{
        let id=parseInt(params.get('id')??'0');
        this.selectedId=id 
      })
    }
  
//checking the dep.id whether it is matching with the selected route parameter value or not
    isSelected(dep:any){
      return parseInt(dep.id) === this.selectedId; //selectedId is a number so we are converting dep.id into integer to compare
    }
  }
