import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SubservicePageComponent } from './subservice-page/subservice-page.component';
import { SubServCatComponent } from './sub-serv-cat/sub-serv-cat.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
{
  path: 'home' ,component:HomeComponent
},

{
  path: 'servicepage' ,component:SubservicePageComponent
},
{
  path: 'subcat' ,component:SubServCatComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
