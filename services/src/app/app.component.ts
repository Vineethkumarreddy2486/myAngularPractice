import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";

@Component({
  selector: 'app-root',
  imports: [EmployeeListComponent, EmployeeDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'services';
}
