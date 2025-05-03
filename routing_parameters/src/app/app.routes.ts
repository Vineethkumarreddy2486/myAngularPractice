import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'',redirectTo:'/emplist',pathMatch:'full'},
    {path:'emplist',component:EmployeeListComponent},
    {path:'empdetai',component:EmployeeDetailComponent},
    {path:'details/:deptname',component:EmployeeDetailComponent}, //pass path, parameter
    {path:'**',component:PageNotFoundComponent}
];
