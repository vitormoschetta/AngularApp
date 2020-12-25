import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './internal/product/product-create/product-create.component';
import { ProductDeleteComponent } from './internal/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './internal/product/product-update/product-update.component';
import { ProductComponent } from './internal/product/product.component';
import { DashboardComponent } from './internal/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'product/delete/:id', component: ProductDeleteComponent },
  { path: 'product/update/:id', component: ProductUpdateComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product', component: ProductComponent },
  { path: 'dashboard', component: DashboardComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

