import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { InternalComponent } from './internal.component';
import { InternalRoutingModule } from './internal-routing.module';
import { HeaderComponent } from './template/header/header.component';
import { NavComponent } from './template/nav/nav.component';
import { UsersComponent } from './users/users.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ProductComponent } from './product/product.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductList2Component } from './product/product-list2/product-list2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';

import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";
import { MatMenuModule } from '@angular/material/menu';
export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    InternalComponent,
    HeaderComponent,
    NavComponent,
    UnauthorizedComponent,    
    DashboardComponent,  
    ProductComponent,           
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,    
    ProductListComponent,
    ProductList2Component,
    UsersComponent,
  ],
  imports: [
    CommonModule,        
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,   
    MatMenuModule,
    InternalRoutingModule,    
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
  exports: [
    InternalComponent,
    HeaderComponent,
    NavComponent,
    UnauthorizedComponent,    
    DashboardComponent,  
    ProductComponent,           
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,    
    ProductList2Component,
    UsersComponent,          
  ]
})

export class InternalModule { }
