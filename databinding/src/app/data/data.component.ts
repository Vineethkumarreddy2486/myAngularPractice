import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-data',
  imports: [NgClass,NgStyle],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {
  public name='vineeth';
  public myId="20781A0431";
  public location='Hyderabad';
  public isDisabled=false


  // class binding

  public Success="text-success";
  public Failed="text-danger";
  public specialized="text-special"

  public hasError=true

  public messages={
    'text-success':!this.hasError,
    'text-danger' : this.hasError,
    'text-special' : this.specialized
  }


  // style binding

  // we can use conditional operators
  public Error=true
  public haveError=false

  // applying multiple properties

  public titleStyles={
    color: 'blue',
    fontStyle : 'italic'
  }
}
