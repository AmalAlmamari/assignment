import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'student',component:StudentComponent}
];


@NgModule({
  imports: [
CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
