import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UsersComponent } from './users/users.component';

const internalRoutes: Routes = [ 
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },  
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'unauthorized', component: UnauthorizedComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [
    RouterModule.forChild(internalRoutes)
  ],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
