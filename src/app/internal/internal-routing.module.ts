import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';

const internalRoutes: Routes = [ 
    { path: 'users', component: UsersComponent },
    { path: 'product/delete/:id', component: ProductDeleteComponent },
    { path: 'product/update/:id', component: ProductDeleteComponent },
    { path: 'product/create', component: ProductDeleteComponent },
    { path: 'product', component: ProductComponent },
    { path: 'dashboard', component: DashboardComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(internalRoutes)
  ],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
