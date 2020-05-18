import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-user', component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
