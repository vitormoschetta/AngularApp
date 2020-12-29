import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from '../../guards/auth.guard'
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductComponent } from './product.component';

const productRoutes: Routes = [ 
    { path: 'product/delete/:id', component: ProductDeleteComponent, canActivate: [AuthGuard] },
    { path: 'product/update/:id', component: ProductUpdateComponent, canActivate: [AuthGuard] },
    { path: 'product/create', component: ProductCreateComponent, canActivate: [AuthGuard] }, 
    { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },   
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
