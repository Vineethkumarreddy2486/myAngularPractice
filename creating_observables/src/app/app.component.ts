import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [Observable],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true
})
export class AppComponent {
  title = 'creating_observables';

  
  // observable is the data or response getting from the server. Here we are not getting from server
  // we are creating on our own

  //1. creating observable
  // import observable from rxjs
   
}
