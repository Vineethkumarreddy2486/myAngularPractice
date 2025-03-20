import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ngif',
  imports: [NgIf],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.scss'
})
export class NgifComponent {
  public display=true
  public boolean=false
}
