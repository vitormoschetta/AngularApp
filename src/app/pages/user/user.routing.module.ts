import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'users/updatePassword', component: UpdatePasswordComponent }, 
  { path: 'users/updateStatus', component: UpdateStatusComponent, canActivate: [AuthGuard] },  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UserRoutingModule { }
