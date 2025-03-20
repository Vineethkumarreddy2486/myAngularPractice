import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [NgFor],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss'
})
export class ForComponent {
  public values=['1','2','3','4']
}
