import { Component } from '@angular/core';

@Component({
  selector: 'app-town',
  imports: [],
  templateUrl: './town.component.html',
  styleUrl: './town.component.scss'
})
export class TownComponent {
  public name='';

  myName(){
    this.name='This is home Component';
  }
}
