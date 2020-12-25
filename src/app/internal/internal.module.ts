import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { HeaderComponent } from '../template/header/header.component';
import { NavComponent } from '../template/nav/nav.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    InternalComponent,
    HeaderComponent,
    NavComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    InternalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
  exports: [
    InternalComponent,
    HeaderComponent,
    NavComponent,
  ]
})
export class InternalModule { }