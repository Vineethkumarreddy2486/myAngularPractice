import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventComponent } from "./event/event.component";



@Component({
  selector: 'app-root',
  imports: [EventComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eventBinding';



}
