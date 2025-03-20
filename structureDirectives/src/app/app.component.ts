import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgifComponent } from "./ngif/ngif.component";
import { SwitchComponent } from "./switch/switch.component";
import { ForComponent } from './for/for.component';

@Component({
  selector: 'app-root',
  imports: [NgifComponent, SwitchComponent,ForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'structureDirectives';
}
