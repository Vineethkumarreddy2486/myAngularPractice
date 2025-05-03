import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  imports: [],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})
export class EmployeeDetailComponent implements OnInit{
  public dName :any='';
constructor(private _receive:ActivatedRoute){}       // imported
 ngOnInit(): void {
   let de=this._receive.snapshot.paramMap.get('deptname');  //This gets the value of deptname from a URL like:
   this.dName=de;
 }
}



//snapshot :- Give's the current value of the route parameters right now, but don’t update it 
// if things change later (	One-time access on init).
