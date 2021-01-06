import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserModule } from './pages/user/user.module';
import { HeaderComponent } from './template/header/header.component';
import { NavComponent } from './template/nav/nav.component';
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
    HomeComponent,
    LoginComponent,        
    RegisterComponent,
    DashboardComponent,    
    HeaderComponent,
    NavComponent,
  ],
  imports: [
    UserModule,
    BrowserModule,
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
    MatTabsModule,
    MatMenuModule,    
  ],
  exports: [
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
    MatTabsModule,
    MatMenuModule,        
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
