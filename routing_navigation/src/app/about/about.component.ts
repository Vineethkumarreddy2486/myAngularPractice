import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  // for without routerLink

  constructor(private route:Router){}

  goToTown(){
    this.route.navigate(['/town']);   //navigate take arrays as agruments
  }
  goToCity(){
    this.route.navigateByUrl('/city');  //navigateByUrl tke string as arguments
  }
}
