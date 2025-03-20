import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataComponent } from "./data/data.component";

@Component({
  selector: 'app-root',
  imports: [DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'databinding';
}
