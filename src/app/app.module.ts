import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";

import { AppComponent } from './app.component';
import { ProductComponent } from './internal/product/product.component';
import { ProductCreateComponent } from './internal/product/product-create/product-create.component';
import { ProductDeleteComponent } from './internal/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './internal/product/product-update/product-update.component';
import { ProductListComponent } from './internal/product/product-list/product-list.component';
import { ProductList2Component } from './internal/product/product-list2/product-list2.component';
import { DashboardComponent } from './internal/dashboard/dashboard.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ExternalModule } from './external/external.module';
import { InternalModule } from './internal/internal.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

registerLocaleData(localePt);

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
    AppComponent,   
    ProductComponent,        
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductUpdateComponent,
    ProductListComponent,
    ProductList2Component,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    ExternalModule,
    InternalModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,      
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
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
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
