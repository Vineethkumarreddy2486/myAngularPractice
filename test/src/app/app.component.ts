import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AuthService]
})
export class AppComponent {
  title = 'test';

  constructor(private authService: AuthService){}
  login(){
    console.log("login")

    this.authService.login().subscribe((res)=>{
      console.log(res)
    })
  }
}
