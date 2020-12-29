import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UsersComponent } from './users.component';

const usersRoutes: Routes = [ 
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },     
    { path: 'updatePassword', component: UpdatePasswordComponent, canActivate: [AuthGuard] }, 
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
