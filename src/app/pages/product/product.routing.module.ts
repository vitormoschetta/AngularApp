import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent, canActivate: [AuthGuard] },  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
