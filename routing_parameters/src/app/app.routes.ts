import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import path from 'path';
import { EmloyeeDetOverviewComponent } from './emloyee-det-overview/emloyee-det-overview.component';
import { EmployeeDetContactComponent } from './employee-det-contact/employee-det-contact.component';

export const routes: Routes = [
    // ABSOLUTE PATH
    {path:'',redirectTo:'/emplist',pathMatch:'full'},
    {path:'emplist',component:EmployeeListComponent},
    {path:'emplist/:id',component:EmployeeDetailComponent,
        children:[                                                         // child route
            {path:'overview',component:EmloyeeDetOverviewComponent},
            {path:'contact',component:EmployeeDetContactComponent}
        ]
    }, //pass path, parameter
    {path:'**',component:PageNotFoundComponent}

    // RELATIVE PATH
// this is just to check the relative path
    // {path :'',redirectTo:'employeelist',pathMatch:'full'},
    // {path:'employeelist',component:EmployeeListComponent},
    // {path:'employeelist/:id',component:EmployeeDetailComponent},
    // {path:'**',component:PageNotFoundComponent}
];
