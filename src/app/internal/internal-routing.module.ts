import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';

const internalRoutes: Routes = [ 
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'product/delete/:id', component: ProductDeleteComponent, canActivate: [AuthGuard] },
    { path: 'product/update/:id', component: ProductUpdateComponent, canActivate: [AuthGuard] },
    { path: 'product/create', component: ProductCreateComponent, canActivate: [AuthGuard] },
    { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [
    RouterModule.forChild(internalRoutes)
  ],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
