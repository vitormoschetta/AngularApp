import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const extermalRoutes: Routes = [ 
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(extermalRoutes)
  ],
  exports: [RouterModule]
})
export class ExternalRoutingModule { }
