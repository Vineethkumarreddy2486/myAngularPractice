import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgFor, NgIf } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor,NgIf],
  standalone: true,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit{
  public Emp_list:any []=[]
  public errorMsg=''
  constructor(private _empList:EmployeeService) {}

  //In TypeScript, void is a special type used to signify that a function does not return any
  //  value. It's a return type for functions that don’t have a return value.
  
  ngOnInit():void{
    this._empList.getemployees().subscribe({
        
      // Handling Errors

      next :(data) => {                          // When data is received successfully
        this.Emp_list=data
      },
      error:(errorM) =>{                        // When something goes wrong (e.g. network/server error)
        this.errorMsg = errorM.message
        console.error('component error',errorM)  // console.error(),,For errors (red text, stack trace)
      }
    })
  }
}

