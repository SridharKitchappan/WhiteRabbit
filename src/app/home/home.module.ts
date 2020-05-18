import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [HomeComponent, CreateUserComponent, FilterPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
