import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'users', component: UserComponent},
  { path: 'users/updatePassword', component: UpdatePasswordComponent },  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UserRoutingModule { }
