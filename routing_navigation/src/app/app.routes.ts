import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TownComponent } from './town/town.component';
import { CityComponent } from './city/city.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {path:'about',component:AboutComponent},
    {path:'home',component:HomeComponent},
    {path:'town',component:TownComponent},
    {path:'city',component:CityComponent},
    {path:'**',component:PageNotFoundComponent}
];
