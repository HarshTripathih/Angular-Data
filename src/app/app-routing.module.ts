import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router"
import {RegisterComponent} from "./components/register/register.component"
import { BlogComponent } from './components/blog/blog.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
const Routes:Routes =[
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(Routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
