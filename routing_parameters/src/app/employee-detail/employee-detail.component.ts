import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  imports: [RouterOutlet],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})
export class EmployeeDetailComponent implements OnInit{
  public dId:number=0;
constructor(private _receive:ActivatedRoute,private _router:Router){}       // imported

// accessing the value of the routing parameter
 ngOnInit(): void {
  //  let de=parseInt(this._receive.snapshot.paramMap.get('id')as string);  //This gets the value of deptname from a URL like:
  //  this.dId=de;
  this._receive.paramMap.subscribe(params=>{
    let id=parseInt(params.get('id')??'0');     //parseInt  gives the integer value 
    this.dId=id;
  })
 }
 onNext(){
  let nextId=this.dId + 1;
  this._router.navigate(['/emplist',nextId])                  //absolute path
  // this._router.navigate([nextId],{relativeTo:this._receive});    // relative path
 }
 onPrevious(){
  let prevId=this.dId - 1;
  this._router.navigate(['/emplist',prevId]);                   //absolute path
  // this._router.navigate([prevId],{relativeTo:this._receive});      // relative path
 }

 // optional route parameters ,which won't effect view
 goToDeptList(){
  let selectedId=this.dId
  // this._router.navigate (['/emplist',{id:selectedId,tes:'deptname'}])
  this._router.navigate(['..',{id:selectedId}],{relativeTo:this._receive})
 }


//  for child routes
 overview(){
  this._router.navigate(['overview'],{relativeTo:this._receive})
 }

 contact(){
  this._router.navigate(['contact'],{relativeTo:this._receive})
 }
}



// snapshot :- Give's the current value of the route parameters right now, but don’t update it 
// if things change later (	One-time access on init).
// Router: To perform navigation.
// ActivatedRoute: To know your current route.